import { Component, OnInit } from '@angular/core';
import { DaoService } from "../dao.service";
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from '../app.component';
import { ifStmt } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-statistique-presence',
  templateUrl: './statistique-presence.component.html',
  styleUrls: ['./statistique-presence.component.sass']
})
export class StatistiquePresenceComponent implements OnInit {

  duree="jour"
  jour="yyyy-mm-dd";
  semaine="";
  mois="";
  user="equipe"
  matricule=0;
  nbUser=0;
  operatrices;
  responsables=[];
  constructor(private daoService: DaoService,public myapp: AppComponent,
    private router: ActivatedRoute) {
      daoService.baseUrl="http://localhost:8762/responsable";
      this.daoService.getListeObjets().subscribe(data=>
        {
            this.responsables=data;
         });
      daoService.baseUrl="http://localhost:8762/operatrice";
      this.daoService.getListeObjets().subscribe(data=>
        {
            this.operatrices=data;
            this.nbUser=data.length;
         });
      myapp.titre="Statistiques du pésence";
      daoService.baseUrl="http://localhost:8762/presence";
     }

  public pieChartLabels:string[] = ['Absence', 'Présence'];
  public pieChartData:number[] = [40, 20];
  public pieChartType:string = 'pie';
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

  initUser(user)
  {
    this.user=user;
    this.makeChart()
  }

  initDuree(duree)
  {
    this.duree=duree;
    if(this.duree=="jour")
    {
      if(this.jour==null)
        this.jour="yyyy-mm-dd"
      this.jour = prompt("Entrer le jour sous cette forme", this.jour);
    }
    else if(this.duree=="mois")
    {
      if(this.mois==null)
        this.mois=""
      this.mois = prompt("Entrer le nombre du mois ",this.mois);
    }
    else
    {
      this.semaine=""
      this.semaine = prompt("Entrer le nombre du semaine ",this.semaine);
    }
    this.makeChart()
  }

  ngOnInit(): void {
  }

  makeChart()
  {
    var d = new Date();
    if(this.user=="operatrice")
    {
      if(this.duree=="jour")
      {
    //    var datestring = d.getFullYear()+ "-" + ("0"+(d.getMonth()+1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2) ;
          datestring=this.jour;
          this.daoService.getObjet2(datestring,datestring).subscribe(data=>
          {
            var i;
            for(i=0;i<data.length;i++)
            {
              if(data[i].utilisateur.matricule==this.matricule)
              {
                this.pieChartData=[0,1];
                break;
              }
            }
            if(data.length==0||data[i].utilisateur.matricule!=this.matricule)
            {
              this.pieChartData=[1,0];
            }
          })
      }
      else if(this.duree=="semaine")
      {
        var date= new Date(d.getFullYear()-1+ "-12-31");
        date.setDate(date.getDate()+7*Number(this.semaine))
       var dateFin = date.getFullYear()+ "-" + ("0"+(date.getMonth()+1)).slice(-2) + "-" + ("0" + date.getDate()).slice(-2) ;
       date.setDate(date.getDate()-6)
       var dateDeb = date.getFullYear()+ "-" + ("0"+(date.getMonth()+1)).slice(-2) + "-" + ("0" + date.getDate()).slice(-2) ;

        this.daoService.getObjet2(dateDeb,dateFin).subscribe(data=>
          {
            var presence=0;
            for(let i=0;i<data.length;i++)
            {
              if(data[i].utilisateur.matricule==this.matricule)
              {
                presence++;
              }
            }
                var absence = 6-presence;
                this.pieChartData=[absence,presence];
          })
      }
      else if(this.duree=="mois")
      {
        var lastDayOfMonth = new Date(d.getFullYear(), d.getMonth()+1, 0);
        var dateDeb = d.getFullYear()+ "-" + ("0"+(this.mois)).slice(-2) + "-" + ("01") ;   
        var dateFin = d.getFullYear()+ "-" + ("0"+(this.mois)).slice(-2) + "-" + ("0" + lastDayOfMonth.getDate()).slice(-2) ;

        this.daoService.getObjet2(dateDeb,dateFin).subscribe(data=>
          {
            var presence=0;
            for(let i=0;i<data.length;i++)
            {
              if(data[i].utilisateur.matricule==this.matricule)
              {
                presence++;
              }
            }
                var absence = 22-presence;
                this.pieChartData=[absence,presence];
          })
      }
    }
    else if(this.user=="equipe")
    {
      if(this.duree=="jour")
      {
        //var datestring = d.getFullYear()+ "-" + ("0"+(d.getMonth()+1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2) ;
        var datestring = this.jour;
        this.daoService.getObjet2(datestring,datestring).subscribe(data=>
          {
            var lastDayOfMonth = new Date(d.getFullYear(), d.getMonth()+1, 0);
            var presence = data.length;
            var absence = this.nbUser-presence;
       
            this.pieChartData=[absence,presence];
          })
      }
      else if(this.duree=="semaine")
      {
          /*this.mois=Math.floor(Number(this.semaine)/4.5)+1+"";
          var lastDayOfMonth = new Date(d.getFullYear(),Number(this.mois), 0);

          const jf = ("0" + ((Number(this.semaine)*7)%Number(lastDayOfMonth.getDate()))).slice(-2);
          const jd = Number(jf)-6;
          alert(lastDayOfMonth.getDate())
          var dateDeb = d.getFullYear()+ "-01-" +  ("0" + ((jd))).slice(-2) ;
          var dateFin = d.getFullYear()+ "-01-" +   ("0" + ((jf))).slice(-2) ;*/
         var date= new Date(d.getFullYear()-1+ "-12-31");
         date.setDate(date.getDate()+7*Number(this.semaine))
        var dateFin = date.getFullYear()+ "-" + ("0"+(date.getMonth()+1)).slice(-2) + "-" + ("0" + date.getDate()).slice(-2) ;
        date.setDate(date.getDate()-6)
        var dateDeb = date.getFullYear()+ "-" + ("0"+(date.getMonth()+1)).slice(-2) + "-" + ("0" + date.getDate()).slice(-2) ;

        // const  dateFin = d.setDate(d.getDate()-6);

        
          
         /* alert(dateDeb);
          alert(dateFin);*/
  
          this.daoService.getObjet2(dateDeb,dateFin).subscribe(data=>
            {
                  var presence = data.length;
                  var absence = this.nbUser*6-presence;
                  this.pieChartData=[absence,presence];
            })
  
      }
      else if(this.duree=="mois")
      {
          var lastDayOfMonth = new Date(d.getFullYear(), d.getMonth()+1, 0);
          var dateDeb = d.getFullYear()+ "-" + ("0"+(this.mois)).slice(-2) + "-" + ("01") ;   
          var dateFin = d.getFullYear()+ "-" + ("0"+(this.mois)).slice(-2) + "-" + ("0" + lastDayOfMonth.getDate()).slice(-2) ; 
  
          this.daoService.getObjet2(dateDeb,dateFin).subscribe(data=>
            {
                  var presence = data.length;
                  var absence = this.nbUser*22-presence;
                  this.pieChartData=[absence,presence];
            })
  
      }
    }
    else if(this.user=="groupe")
    {
      if(this.duree=="jour")
      {
        //var datestring = d.getFullYear()+ "-" + ("0"+(d.getMonth()+1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2) ;
        var datestring = this.jour;
        this.daoService.getObjet2(datestring,datestring).subscribe(data=>
          {
            var lastDayOfMonth = new Date(d.getFullYear(), d.getMonth()+1, 0);
            var tabOper=[];

            for(let i=0;i<data.length;i++)
            {
              if(data[i].utilisateur.responsable.matricule==this.matricule)
              {
                tabOper.push(data[i])
                
              }
            }
            var presence = tabOper.length;
            var absence = this.getOperatricesByResponsable(this.matricule)-presence;
       
            this.pieChartData=[absence,presence];
          })
      }
      else if(this.duree=="semaine")
      {
          /*this.mois=Math.floor(Number(this.semaine)/4.5)+1+"";
          var lastDayOfMonth = new Date(d.getFullYear(),Number(this.mois), 0);

          const jf = ("0" + ((Number(this.semaine)*7)%Number(lastDayOfMonth.getDate()))).slice(-2);
          const jd = Number(jf)-6;
          alert(lastDayOfMonth.getDate())
          var dateDeb = d.getFullYear()+ "-01-" +  ("0" + ((jd))).slice(-2) ;
          var dateFin = d.getFullYear()+ "-01-" +   ("0" + ((jf))).slice(-2) ;*/
         var date= new Date(d.getFullYear()-1+ "-12-31");
         date.setDate(date.getDate()+7*Number(this.semaine))
        var dateFin = date.getFullYear()+ "-" + ("0"+(date.getMonth()+1)).slice(-2) + "-" + ("0" + date.getDate()).slice(-2) ;
        date.setDate(date.getDate()-6)
        var dateDeb = date.getFullYear()+ "-" + ("0"+(date.getMonth()+1)).slice(-2) + "-" + ("0" + date.getDate()).slice(-2) ;

        // const  dateFin = d.setDate(d.getDate()-6);

        
          
         /* alert(dateDeb);
          alert(dateFin);*/
  
          this.daoService.getObjet2(dateDeb,dateFin).subscribe(data=>
            {
              var tabOper=[];

              for(let i=0;i<data.length;i++)
              {
                if(data[i].utilisateur.responsable.matricule==this.matricule)
                {
                  tabOper.push(data[i])
                  
                }
              }
                  var presence = tabOper.length;
                  var absence = this.getOperatricesByResponsable(this.matricule)*6-presence;
                  this.pieChartData=[absence,presence];
            })
  
      }
      else if(this.duree=="mois")
      {
          var lastDayOfMonth = new Date(d.getFullYear(), d.getMonth()+1, 0);
          var dateDeb = d.getFullYear()+ "-" + ("0"+(this.mois)).slice(-2) + "-" + ("01") ;   
          var dateFin = d.getFullYear()+ "-" + ("0"+(this.mois)).slice(-2) + "-" + ("0" + lastDayOfMonth.getDate()).slice(-2) ; 
  
          this.daoService.getObjet2(dateDeb,dateFin).subscribe(data=>
            {
              var tabOper=[];

              for(let i=0;i<data.length;i++)
              {
                if(data[i].utilisateur.responsable.matricule==this.matricule)
                {
                  tabOper.push(data[i])
                  
                }
              }
                  var presence = tabOper.length;
                  var absence = this.getOperatricesByResponsable(this.matricule)*22-presence;
                  this.pieChartData=[absence,presence];
            })
  
      }
    }
  }


  getOperatricesByResponsable(responsable)
  {
    var nb=0;
    for(let i=0;i<this.operatrices.length;i++)
      if(this.operatrices[i].responsable.matricule==responsable)
        nb++;
    return nb;
  }
}
