import { Component, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent implements OnInit {

  imgUrl: string;
  imgHeight: number;
  imgWidth: number;
  obj;
  private ctx: CanvasRenderingContext2D;
  private tarctx: CanvasRenderingContext2D;
  private contextArr : CanvasRenderingContext2D[];

  @ViewChild('myCanvas') canva;
  @ViewChild('tarCanvas') tarCanva;
  @ViewChild('refImg') refImg;

  

  constructor() { }

  ngOnInit(): void {
    this.imgUrl = "../../assets/images/hand.svg";
    
  }

  ngAfterViewInit(): void {
    this.refImg.nativeElement.src= this.imgUrl;
    this.refImg.nativeElement.crossOrigin = "Anonymous";
    //onLoad
    setTimeout(() => {
      this.getData();
    }, 3000);

  }



  getData(){
    //console.log(this.canva);
    this.ctx = this.canva.nativeElement.getContext("2d");
    this.imgHeight = this.refImg.nativeElement.height;
    this.imgWidth = this.refImg.nativeElement.width;
    console.log(this.ctx);
    this.ctx.drawImage(this.refImg.nativeElement, 0, 0, this.imgWidth, this.imgHeight);
    let imgData = this.ctx.getImageData(0, 0, this.imgWidth, this.imgHeight);
    let data = imgData.data;
    console.log(data);
    let pixelRgb = [];

    for(let i=0; i<data.length; i+=4){
      pixelRgb.push([data[i], data[i+1], data[i+2]]);
    }
    console.log(pixelRgb);

    let groupColor = {
      "0-0-0": [],
      "255-255-255":[],
    };

    let numToSel = {
      "0-0-0": "#000",
      "255-255-255":"#ffffff",
    };


    for(let i=0; i<pixelRgb.length; i++){
      let x = i%this.refImg.nativeElement.width;
      let y = Math.floor(i/this.refImg.nativeElement.width)
      let tempPos = [x, y];
      let minD = 255*255**3;
      let selKey;
      for(let key in groupColor){
        let sp = key.split("-");
        let r=parseInt(sp[0]), g=parseInt(sp[1]), b=parseInt(sp[2]);
        let tempDist = (r-pixelRgb[i][0])*(r-pixelRgb[i][0]) + (g-pixelRgb[i][1])*(g-pixelRgb[i][1]) + (b-pixelRgb[i][2])*(r-pixelRgb[i][2]);
        if(minD>tempDist){
            selKey = key;
            minD = tempDist;
        }
      }

      groupColor[selKey].push(tempPos);
    }

    console.log(groupColor);
    this.tarctx = this.tarCanva.nativeElement.getContext("2d");


    for(let rgbKey in groupColor){
      
      if(rgbKey != '0-0-0'){
          let sp = rgbKey.split("-");
        //console.log(parseInt(sp[0])+" " +parseInt(sp[1]),);
        let density = 0.05;
        console.log(parseInt(sp[0]) + " " + parseInt(sp[1]) + " " + parseInt(sp[2])+ " "  + density + (parseInt(sp[0])+parseInt(sp[1])+parseInt(sp[2])));
        let numberToSelect = density*groupColor[rgbKey].length;
        

        for(let i=0; i<numberToSelect; i++){
            let index = Math.floor(Math.random()*(groupColor[rgbKey].length-1));
            //console.log(index);
            this.tarctx.beginPath();
            this.obj = this.tarctx.arc(groupColor[rgbKey][index][0], groupColor[rgbKey][index][1], 1, 0, 2*Math.PI);
            this.tarctx.fillStyle = numToSel[rgbKey];
            this.tarctx.fill();
        }
        console.log(this.tarctx);
      }
    }

    console.log("Inside");

  }

  rgbToKey(rgb: any[]): string{
      let key = rgb[0]+"-"+rgb[1]+"-"+rgb[2]
      return key;
  }


}
