document.addEventListener('DOMContentLoaded',()=>{
  searchPag.init();
});
class searchPag {

  static  init(){
    searchPag.showLiPages();
    //searchPag.show8LiPages();
    searchPag.AnimLiItems();
    searchPag.Back();
    searchPag.Next();
    searchPag.index();
    searchPag.SearchServices();
    searchPag.SearchItemLI();
    searchPag.BackSe();
    searchPag.NextSe();
  }
  static SearchItemLI(){
    let input=document.getElementById('search_input');
    if(input.value !== '' || undefined || null){
      let items=document.querySelectorAll('.services_block li');
      searchPag.counter=0;
      for(let value of items){
        if(value.style.display !== 'none'){
          searchPag.counter++;
        }
      }
      let back=document.querySelector('.seaBack'),
          backImg=document.querySelector('.seaBack img'),
          next=document.querySelector('.seaNext'),
          nextImg=document.querySelector('.seaNext img');
      if(searchPag.SearchLi === 16){
        back.classList.remove('hide');
        next.classList.remove('hide');
          backImg.style.top='';
          nextImg.style.top='';
      }
      if(searchPag.SearchLi === 8){
        back.classList.remove('hide');
        next.classList.remove('hide');
          backImg.style.top='12%';
          nextImg.style.top='12%';
      }
      let countPages=Math.ceil(searchPag.counter / searchPag.SearchLi);
      if(countPages){
        let blockLi=document.querySelector('#SearchItemsLiBlock');
        blockLi.style.display='block';
        blockLi.hidden=false;
        blockLi.classList.remove('hide');
        blockLi.style.display='flex';
        blockLi.innerHTML='';
        if( countPages > -1 && countPages < 44) {

          for (let i = 0; i < countPages; i++) {
            blockLi.innerHTML += `<li style="display:block;" data-sea="" value="${i}"></li>`;
          }
          let itemsPages=document.querySelectorAll('#SearchItemsLiBlock li');
          for(let i=0; i < itemsPages.length;i++){
            if(itemsPages[i].value === 0){
              back.disabled=true;
              back.style.opacity='0.5';
              itemsPages[i].style.backgroundColor='#000000';
              itemsPages[i].setAttribute('data-sea','active');
            }
          }
        }
      }
    }
  }
  static BackSe() {
    let back=document.querySelector('.seaBack'),
        next=document.querySelector('.seaNext');
    back.addEventListener('click',()=>{
      searchPag.hh1='plus';
      searchPag.hh2='plus';
      next.disabled=false;
      next.style.opacity='1';
      let item=document.querySelectorAll('#SearchItemsLiBlock li');
      for(let i=0; i<item.length;i++){
          if(item[i].dataset.sea === 'active'){
            let seb=item[i].previousElementSibling;
            item[i].setAttribute('data-sea','');
            item[i].style.backgroundColor='white';
            seb.setAttribute('data-sea','active');
            seb.style.backgroundColor='#000000';
            if(seb.value === 0){
              back.disabled=true;
              back.style.opacity='0.5';
            }
            searchPag.index2(seb.value);
            break;
          }
      }
    });
  }
  static NextSe() {
    let next=document.querySelector('.seaNext');
    next.addEventListener('click',()=>{
      searchPag.hh1='minus';
      searchPag.hh2='minus';
      let back=document.querySelector('.seaBack');
      back.disabled=false;
      back.style.opacity='1';
      let itemsLi=document.querySelectorAll('#SearchItemsLiBlock li');
      for(let i=0;i<itemsLi.length;i++){
        if(itemsLi[i].dataset.sea !== '' && itemsLi[i].dataset.sea === 'active'){
          let nextSib=itemsLi[i].nextElementSibling;
          if(nextSib === null || undefined || ''){
            continue;
          }
          if(nextSib !== null || undefined || '') {
              itemsLi[i].setAttribute('data-sea','');
              itemsLi[i].style.backgroundColor='white';
              nextSib.setAttribute('data-sea','active');
              nextSib.style.backgroundColor='#000000';
              let rof=nextSib.nextElementSibling;
              if(rof === null || undefined || ''){
                next.disabled=true;
                next.style.opacity='0.5';
              }
              searchPag.index2(nextSib.value);
          break;
          }
        }
      }
    });
  }
  static index2(page){
    if(searchPag.SearchLi === 8) {
      let count1,
          count2;
      switch (page) {
        case 0:
          count1 = 0;
          count2 = 8;
          searchPag.Pag2(count1, count2);
          break;
        case 1:
          count1 = 8;
          count2 = 16;
          searchPag.Pag2(count1, count2);
          break;
        case 2:
          count1 = 16;
          count2 = 24;
          searchPag.Pag2(count1, count2);
          break;
        case 3:
          count1 = 24;
          count2 = 32;
          searchPag.Pag2(count1, count2);
          break;
        case 4:
          count1 = 32;
          count2 = 40;
          searchPag.Pag2(count1, count2);
          break;
        case 5:
          count1 = 40;
          count2 = 48;
          searchPag.Pag2(count1, count2);
          break;
        case 6:
          count1 = 48;
          count2 = 56;
          searchPag.Pag2(count1, count2);
          break;
        case 7:
          count1 = 56;
          count2 = 64;
          searchPag.Pag2(count1, count2);
          break;
        case 8:
          count1 = 64;
          count2 = 72;
          searchPag.Pag2(count1, count2);
          break;
        case 9:
          count1 = 72;
          count2 = 80;
          searchPag.Pag2(count1, count2);
          break;
        case 10:
          count1 = 80;
          count2 = 88;
          searchPag.Pag2(count1, count2);
          break;
        case 11:
          count1 = 88;
          count2 = 96;
          searchPag.Pag2(count1, count2);
          break;
        case 12:
          count1 = 96;
          count2 = 104;
          searchPag.Pag2(count1, count2);
          break;
        case 13:
          count1 = 104;
          count2 = 112;
          searchPag.Pag2(count1, count2);
          break;
        case 14:
          count1 = 112;
          count2 = 120;
          searchPag.Pag2(count1, count2);
          break;
        case 15:
          count1 = 120;
          count2 = 128;
          searchPag.Pag2(count1, count2);
          break;
        case 16:
          count1 = 128;
          count2 = 136;
          searchPag.Pag2(count1, count2);
          break;
        case 17:
          count1 = 136;
          count2 = 144;
          searchPag.Pag2(count1, count2);
          break;
        case 18:
          count1 = 144;
          count2 = 152;
          searchPag.Pag2(count1, count2);
          break;
        case 19:
          count1 = 152;
          count2 = 160;
          searchPag.Pag2(count1, count2);
          break;
        case 20:
          count1 = 160;
          count2 = 168;
          searchPag.Pag2(count1, count2);
          break;
        case 21:
          count1 = 168;
          count2 = 176;
          searchPag.Pag2(count1, count2);
          break;
        case 22:
          count1 = 176;
          count2 = 184;
          searchPag.Pag2(count1, count2);
          break;
        case 23:
          count1 = 184;
          count2 = 192;
          searchPag.Pag2(count1, count2);
          break;
        case 24:
          count1 = 192;
          count2 = 200;
          searchPag.Pag2(count1, count2);
          break;
        case 25:
          count1 = 200;
          count2 = 208;
          searchPag.Pag2(count1, count2);
          break;
        case 26:
          count1 = 208;
          count2 = 216;
          searchPag.Pag2(count1, count2);
          break;
        case 27:
          count1 = 216;
          count2 = 224;
          searchPag.Pag2(count1, count2);
          break;
        case 28:
          count1 = 224;
          count2 = 232;
          searchPag.Pag2(count1, count2);
          break;
        case 29:
          count1 = 232;
          count2 = 240;
          searchPag.Pag2(count1, count2);
          break;
        case 30:
          count1 = 240;
          count2 = 248;
          searchPag.Pag2(count1, count2);
          break;
        case 31:
          count1 = 248;
          count2 = 256;
          searchPag.Pag2(count1, count2);
          break;
        case 32:
          count1 = 256;
          count2 = 264;
          searchPag.Pag2(count1, count2);
          break;
        case 33:
          count1 = 264;
          count2 = 272;
          searchPag.Pag2(count1, count2);
          break;
        case 34:
          count1 = 272;
          count2 = 280;
          searchPag.Pag2(count1, count2);
          break;
        case 35:
          count1 = 280;
          count2 = 288;
          searchPag.Pag2(count1, count2);
          break;
        case 36:
          count1 = 288;
          count2 = 296;
          searchPag.Pag2(count1, count2);
          break;
        case 37:
          count1 = 296;
          count2 = 304;
          searchPag.Pag2(count1, count2);
          break;
        case 38:
          count1 = 304;
          count2 = 312;
          searchPag.Pag2(count1, count2);
          break;
        case 39:
          count1 = 312;
          count2 = 320;
          searchPag.Pag2(count1, count2);
          break;
        case 40:
          count1 = 320;
          count2 = 328;
          searchPag.Pag2(count1, count2);
          break;
        case 41:
          count1 = 328;
          count2 = 336;
          searchPag.Pag2(count1, count2);
          break;
        case 42:
          count1 = 336;
          count2 = 344;
          searchPag.Pag2(count1, count2);
          break;
        case 43:
          count1 = 344;
          count2 = 351;
          searchPag.Pag2(count1, count2);
          break;
      }
      //searchPag.Pag2(count1, count2);
    }
  }
  static Pag2(cou1,cou2){
    let items=document.querySelectorAll('.services_block li'),
        mas=[];
    for(let i=0; i<items.length;i++){
      if(items[i].style.display  !==  'none'){
        mas.push(items[i]);
      }
    }

    if(searchPag.hh1 === 'minus' && searchPag.hh2 === 'minus') {
      var hh1=cou1 - 8,
          hh2=cou2 - 8;
    }
    if(searchPag.hh1 === 'plus' && searchPag.hh2 === 'plus'){
      var hh1=cou1 + 8,
          hh2=cou2 + 8;
    }
      for(;hh1<hh2;hh1++){
        if(mas[hh1] !== undefined || null || '') {
          mas[hh1].classList.add('hide');
        }
      }
     for(;cou1< cou2;cou1++){
       if(mas[cou1] !== undefined || null || '') {
         mas[cou1].classList.remove('hide');
       }
     }


  }



  static  SearchServices(){
   let sectionKeyboard=document.querySelector('#keyboard2');
        sectionKeyboard.addEventListener('click',()=>{
          searchPag.yesSearch('yes');
          searchPag.searching();
          let inputSearch=document.querySelector('#search_input');
          if(inputSearch.value !== ''){
            searchPag.SearchLi=8;
          }
        });
  }
  static searching(){
      var input, filter, ul, li, a, i, txtValue,istems;
      input = document.getElementById("search_input");
      filter = input.value.toUpperCase();
      ul = document.querySelector(".services_block");
      li = ul.getElementsByTagName("li");
      istems=document.querySelector('.Search_pagination_items');


    if(input.value === '' || undefined || null){
      searchPag.noSearch('no');
      istems.style.display='flex';
    }

    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          ul.style.display='inline';
          li[i].style.display = "";
          li[i].classList.remove('hide');
        } else {
          li[i].classList.add('hide');
          li[i].style.display = "none";
        }
      }
  }

  static noSearch(no){
      if(no){
        let next = document.querySelector('.next_check'),
            back = document.querySelector('.back_check'),
            PagItemsBlock = document.querySelector('.Search_pagination_items');
        next.style.display = 'block';
        back.style.display = 'block';
        PagItemsBlock.style.display = 'block';
      }
  }
  static yesSearch(yes){
    if(yes) {
      let next = document.querySelector('.next_check'),
          back = document.querySelector('.back_check'),
          PagItemsBlock = document.querySelector('.Search_pagination_items');
      next.style.display = 'none';
      back.style.display = 'none';
      PagItemsBlock.style.display = 'none';
      searchPag.SearchItemLI();
    }
  }

    static AnimLiItems(){
        let blockLi=document.querySelectorAll('.Search_pagination_items li'),
            back=document.querySelector('.back_check');
        for(let i=0;i<blockLi.length;i++){
            if(blockLi[i].value === 0){
                back.disabled=true;
                back.style.opacity='0.5';
            }
        }

    }
    static Back(){
      let back=document.querySelector('.back_check');
        back.addEventListener('click',()=>{
            let blockLi=document.querySelectorAll('.Search_pagination_items li'),
                next=document.querySelector('.next_check');
            for(let i=0;i<blockLi.length;i++){
                if(blockLi[i].value !== 21){
                    next.disabled=false;
                    next.style.opacity='1';
                }
                if(blockLi[i].value !== 0){
                    back.disabled=false;
                    back.style.opacity='1';
                }
                if(blockLi[i].dataset.set === 'active'){
                    blockLi[i].style.backgroundColor='white';
                    blockLi[i].setAttribute('data-set','');
                    let back=blockLi[i].previousElementSibling;
                    back.style.backgroundColor='#1B0E3A';
                    back.setAttribute('data-set','active');
                    searchPag.index(back.value);
                    if(back.value === 0){
                        let back=document.querySelector('.back_check');
                        back.disabled=true;
                        back.style.opacity='0.5';
                    }
                    break;
                }
            }
        });
    }
    static Next(){
        let next=document.querySelector('.next_check');
        next.addEventListener('click',()=>{
            let blockLi=document.querySelectorAll('.Search_pagination_items li'),
                back=document.querySelector('.back_check');
            for(let i=0;i<blockLi.length;i++){
                if(blockLi[i].value === 0 ){
                    back.disabled=false;
                    back.style.opacity='1';
                }
                if(blockLi.length <= 42){
                  if(blockLi[i].value === 20){
                    next.disabled=true;
                    next.style.opacity='0.5';
                  }
                }

                if(blockLi[i].value === 41){
                  next.disabled=true;
                  next.style.opacity='0.5';
                }

                if(blockLi[i].dataset.set === 'active'){
                    blockLi[i].style.backgroundColor='white';
                    blockLi[i].setAttribute('data-set','');
                    let next= blockLi[i].nextElementSibling;
                    next.style.backgroundColor='#1B0E3A';
                    next.setAttribute('data-set','active');
                    searchPag.index(next.value);
                    break;
                }
            }
        });
    }
    static index(pages){
    if(searchPag.CountService === 16) {
      var page;
      if (pages) {
        page = pages;
      } else {
        page = 0;
      }
      var count1, count2;
      switch (page) {
        case 0:
          count1 = 0;
          count2 = 16;
          searchPag.Pag(count1, count2);
          break;
        case 1:
          count1 = 16;
          count2 = 32;
          searchPag.Pag(count1, count2);
          break;
        case 2:
          count1 = 32;
          count2 = 48;
          searchPag.Pag(count1, count2);
          break;
        case 3:
          count1 = 48;
          count2 = 64;
          searchPag.Pag(count1, count2);
          break;
        case 4:
          count1 = 64;
          count2 = 80;
          searchPag.Pag(count1, count2);
          break;
        case 5:
          count1 = 80;
          count2 = 96;
          searchPag.Pag(count1, count2);
          break;
        case 6:
          count1 = 96;
          count2 = 112;
          searchPag.Pag(count1, count2);
          break;
        case 7:
          count1 = 112;
          count2 = 128;
          searchPag.Pag(count1, count2);
          break;
        case 8:
          count1 = 128;
          count2 = 144;
          searchPag.Pag(count1, count2);
          break;
        case 9:
          count1 = 144;
          count2 = 160;
          searchPag.Pag(count1, count2);
          break;
        case 10:
          count1 = 160;
          count2 = 176;
          searchPag.Pag(count1, count2);
          break;
        case 11:
          count1 = 176;
          count2 = 192;
          searchPag.Pag(count1, count2);
          break;
        case 12:
          count1 = 192;
          count2 = 208;
          searchPag.Pag(count1, count2);
          break;
        case 13:
          count1 = 208;
          count2 = 224;
          searchPag.Pag(count1, count2);
          break;
        case 14:
          count1 = 224;
          count2 = 240;
          searchPag.Pag(count1, count2);
          break;
        case 15:
          count1 = 240;
          count2 = 256;
          searchPag.Pag(count1, count2);
          break;
        case 16:
          count1 = 256;
          count2 = 272;
          searchPag.Pag(count1, count2);
          break;
        case 17:
          count1 = 272;
          count2 = 288;
          searchPag.Pag(count1, count2);
          break;
        case 18:
          count1 = 288;
          count2 = 304;
          searchPag.Pag(count1, count2);
          break;
        case 19:
          count1 = 304;
          count2 = 320;
          searchPag.Pag(count1, count2);
          break;
        case 20:
          count1 = 320;
          count2 = 336;
          searchPag.Pag(count1, count2);
          break;
        case 21:
          count1 = 336;
          count2 = 352;
          searchPag.Pag(count1, count2);
          break;
      }
      searchPag.Pag(count1, count2);
    }else if(searchPag.CountService === 8){
      var page2;
      if (pages) {
        page2 = pages;
      } else {
        page2 = 0;
      }

      switch (page2) {
        case 0:
          count1 = 0;
          count2 = 8;
          searchPag.Pag(count1, count2);
          break;
        case 1:
          count1 = 8;
          count2 = 16;
          searchPag.Pag(count1, count2);
          break;
        case 2:
          count1 = 16;
          count2 = 24;
          searchPag.Pag(count1, count2);
          break;
        case 3:
          count1 = 24;
          count2 = 32;
          searchPag.Pag(count1, count2);
          break;
        case 4:
          count1 = 32;
          count2 = 40;
          searchPag.Pag(count1, count2);
          break;
        case 5:
          count1 = 40;
          count2 = 48;
          searchPag.Pag(count1, count2);
          break;
        case 6:
          count1 = 48;
          count2 = 56;
          searchPag.Pag(count1, count2);
          break;
        case 7:
          count1 = 56;
          count2 = 64;
          searchPag.Pag(count1, count2);
          break;
        case 8:
          count1 = 64;
          count2 = 72;
          searchPag.Pag(count1, count2);
          break;
        case 9:
          count1 = 72;
          count2 = 80;
          searchPag.Pag(count1, count2);
          break;
        case 10:
          count1 = 80;
          count2 = 88;
          searchPag.Pag(count1, count2);
          break;
        case 11:
          count1 = 88;
          count2 = 96;
          searchPag.Pag(count1, count2);
          break;
        case 12:
          count1 = 96;
          count2 = 104;
          searchPag.Pag(count1, count2);
          break;
        case 13:
          count1 = 104;
          count2 = 112;
          searchPag.Pag(count1, count2);
          break;
        case 14:
          count1 = 112;
          count2 = 120;
          searchPag.Pag(count1, count2);
          break;
        case 15:
          count1 = 120;
          count2 = 128;
          searchPag.Pag(count1, count2);
          break;
        case 16:
          count1 = 128;
          count2 = 136;
          searchPag.Pag(count1, count2);
          break;
        case 17:
          count1 = 136;
          count2 = 144;
          searchPag.Pag(count1, count2);
          break;
        case 18:
          count1 = 144;
          count2 = 152;
          searchPag.Pag(count1, count2);
          break;
        case 19:
          count1 = 152;
          count2 = 160;
          searchPag.Pag(count1, count2);
          break;
        case 20:
          count1 = 160;
          count2 = 168;
          searchPag.Pag(count1, count2);
          break;
        case 21:
          count1 = 168;
          count2 = 176;
          searchPag.Pag(count1, count2);
          break;
        case 22:
          count1 = 176;
          count2 = 184;
          searchPag.Pag(count1, count2);
          break;
        case 23:
          count1 = 184;
          count2 = 192;
          searchPag.Pag(count1, count2);
          break;
        case 24:
          count1 = 192;
          count2 = 200;
          searchPag.Pag(count1, count2);
          break;
        case 25:
          count1 = 200;
          count2 = 208;
          searchPag.Pag(count1, count2);
          break;
        case 26:
          count1 = 208;
          count2 = 216;
          searchPag.Pag(count1, count2);
          break;
        case 27:
          count1 = 216;
          count2 = 224;
          searchPag.Pag(count1, count2);
          break;
        case 28:
          count1 = 224;
          count2 = 232;
          searchPag.Pag(count1, count2);
          break;
        case 29:
          count1 = 232;
          count2 = 240;
          searchPag.Pag(count1, count2);
          break;
        case 30:
          count1 = 240;
          count2 = 248;
          searchPag.Pag(count1, count2);
          break;
        case 31:
          count1 = 248;
          count2 = 256;
          searchPag.Pag(count1, count2);
          break;
        case 32:
          count1 = 256;
          count2 = 264;
          searchPag.Pag(count1, count2);
          break;
        case 33:
          count1 = 264;
          count2 = 272;
          searchPag.Pag(count1, count2);
          break;
        case 34:
          count1 = 272;
          count2 = 280;
          searchPag.Pag(count1, count2);
          break;
        case 35:
          count1 = 280;
          count2 = 288;
          searchPag.Pag(count1, count2);
          break;
        case 36:
          count1 = 288;
          count2 = 296;
          searchPag.Pag(count1, count2);
          break;
        case 37:
          count1 = 296;
          count2 = 304;
          searchPag.Pag(count1, count2);
          break;
        case 38:
          count1 = 304;
          count2 = 312;
          searchPag.Pag(count1, count2);
          break;
        case 39:
          count1 = 312;
          count2 = 320;
          searchPag.Pag(count1, count2);
          break;
        case 40:
          count1 = 320;
          count2 = 328;
          searchPag.Pag(count1, count2);
          break;
        case 41:
          count1 = 328;
          count2 = 336;
          searchPag.Pag(count1, count2);
          break;
        case 42:
          count1 = 336;
          count2 = 344;
          searchPag.Pag(count1, count2);
          break;
        case 43:
          count1 = 344;
          count2 = 351;
          searchPag.Pag(count1, count2);
          break;
      }
      searchPag.Pag(count1, count2);
    }
    }
    static Pag (cou1,cou2,mmm){
        if(mmm === undefined || mmm === 0){
          let servicesBlockLI=document.querySelectorAll('.services_block li');
          for(let i=0; i<servicesBlockLI.length;i++){
            servicesBlockLI[i].classList.add('hide');
          }
          for(;cou1 < cou2;cou1++){
            if(servicesBlockLI[cou1]){
              servicesBlockLI[cou1].classList.remove('hide');
            }
          }
        }

    }
    static showLiPages(number){
      let blockLi=document.querySelector('.Search_pagination_items'),
          ser=document.querySelectorAll('.services_block li'),
          countLi= Math.ceil( ser.length / searchPag.CountService);
          blockLi.innerHTML = '';
        for(let i=0; i<countLi;i++){
            blockLi.innerHTML += ` <li value="${i}"></li>`;
        }
        let blockLiItems=document.querySelectorAll('.Search_pagination_items li');
        for(let i=0;i<blockLiItems.length;i++){
            if(blockLiItems[i] && blockLiItems[i].value === 0){
                blockLiItems[i].style.backgroundColor='#1B0E3A';
                blockLiItems[i].setAttribute('data-set','active');
            }
        }

    }
    static show8LiPages(){
    if(searchPag.CountService === 8 && Keyboards.lis !== null){
      var num=searchPag.CountService;
    }
      let blockLi=document.querySelector('.Search_pagination_items'),
          ser=document.querySelectorAll('.services_block li'),
          countLi= Math.ceil( ser.length / num);

          blockLi.innerHTML = '';
      for(let i=0; i<countLi;i++){
        if(i === 44 || i === 43){
          break;
        }
        blockLi.innerHTML += ` <li style="width:15px;height:15px;" value="${i}"></li>`;
      }
      let blockLiItems=document.querySelectorAll('.Search_pagination_items li');
      for(let i=0;i<blockLiItems.length;i++){
        if(blockLiItems[i] && blockLiItems[i].value === 0){
          blockLiItems[i].style.backgroundColor='#1B0E3A';
          blockLiItems[i].setAttribute('data-set','active');
        }
      }
    }

}
searchPag.CountService=16;
searchPag.page=null;
searchPag.sss='';
searchPag.SearchLi=0;
searchPag.hh1='';
searchPag.hh2='';