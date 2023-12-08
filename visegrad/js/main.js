let vrednostSm=[8,4,6,6,4,8];
let vrednostMd=[6,3,3,3,3,6];
let slikePath=[
    "images/g1.jpg",
    "images/g2.jpg",
    "images/g3.jpg",
    "images/g4.jpg",
    "images/g5.jpg",
    "images/g6.jpg"
]


function ispisiGaleriju(){
    let wrapper=document.getElementById("galleryWrapper");
    console.log(vrednostSm.length);
    for(let i=0;i<vrednostSm.length;i++){
        let div1=document.createElement('div');
        div1.classList.add("col-sm-"+vrednostSm[i],"col-md-"+vrednostMd[i],"px-0");
        let slika=document.createElement('img');
        slika.setAttribute('src',slikePath[i]);
        slika.setAttribute('alt',"Slika"+i+1);
        let aTag=document.createElement('a');
        aTag.setAttribute('href',slikePath[i]);
        aTag.setAttribute('data-toggle',"lightbox");
        aTag.setAttribute('data-gallery','gallery');
        let iTag= document.createElement('i');
        iTag.classList.add('fa','fa-picture-o');
        iTag.setAttribute('aria-hidden','true');
        aTag.appendChild(iTag);
        let divImgBox=document.createElement('div');
        divImgBox.classList.add('img-box');
        divImgBox.style='height:450px;'
        divImgBox.appendChild(slika);
        divImgBox.appendChild(aTag);
        div1.appendChild(divImgBox);
        wrapper.appendChild(div1);
    }
    
}

ispisiGaleriju();
