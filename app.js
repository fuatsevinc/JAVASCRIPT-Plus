// const data = fetch('https://restcountries.com/v3.1/name/Turkey');
// console.log(data);

// fetch('https://restcountries.com/v3.1/name/Turkey')
//   .then((response) => {
//     console.log(response);
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//     console.log(data[0].capital, data[0].name.common);
//   });

// const response = await fetch('https://restcountries.com/v3.1/name/Turkey');

const renderCountry = (data, type = 'country') => {
    const flag = data.flags.svg;
    const countryName = data.name.common;
    const region = data.region;
    const capital = data.capital;
    const population = data.population;
    const languages = data.languages;
    const currencies = data.currencies;
  
    const countryHtmlCard = `
        <img src="${flag}" class="card-img-top border border-secondary" alt="Flag" />
        <div class="card-body">
          <h5 class="card-title">${countryName}</h5>
          <p class="card-text">${region}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item"><span><i class="fas fa-2x fa-landmark"></i>${capital}</span></li>
          <li class="list-group-item"><span><i class="fas fa-lg fa-users"></i>${(
            population / 1_000_000
          ).toFixed(2)} M</span></li>
          <li class="list-group-item"><span><i class="fas fa-lg fa-comments"></i>${Object.values(
            languages
          )}</span></li>
          <li class="list-group-item">
            <span
              ><i class="fas fa-lg fa-money-bill-wave"></i>${
                Object.values(currencies)[0].name
              } ${Object.values(currencies)[0].symbol}
              </span
            >
          </li>
        </ul>`;
    if (type === 'country') {
      const countryHtml = `<div class="container country">
              <div class="row justify-content-center mt-5">
                <div class="card country-card col col-sm-6 col-lg-3 py-3" >
                  ${countryHtmlCard}
                </div>
              </div>
              <div class="row justify-content-start neighbour-container">
            </div>`;
      const main = document.querySelector('main');
      main.insertAdjacentHTML('afterbegin', countryHtml);
    } else if (type === 'neighbour') {
      const neighbourHtml = `<div class="card col col-sm-6 col-lg-3 py-3 neighbour">${countryHtmlCard}</div>`;
      const neighbourDiv = document.querySelectorAll('.neighbour-container');
      neighbourDiv[0].insertAdjacentHTML('beforeend', neighbourHtml);
    }
  };
  
  // let globalData = 'Henüz boş';
  const getCountry = async (countryName) => {
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${countryName}`
    );
    const data = await response.json();
    // renderCountry(data[0]);
    // console.log(data);
    return data[0];
    // globalData = data;
    //   console.log(data[0].capital, data[0].name.common);
    //   console.log('Inside async');
    //   console.log(globalData);
  };
  // https://restcountries.com/v3.1/alpha/{code}
  
  const getNeighbour = async (countryCode) => {
    const response = await fetch(
      `https://restcountries.com/v3.1/alpha/${countryCode}`
    );
    const data = await response.json();
    return data[0];
  };
  
  const viewCountry = async (countryName) => {
    const data = await getCountry(countryName);
    renderCountry(data);
  
  console.log(data.borders);
/*    const neighbour = await getNeighbour(data.borders[0]); */
/*     renderCountry(neighbour, 'neighbour'); */
/*     const neighbour2 = await getNeighbour(data.borders[3]); */
/*     renderCountry(neighbour2, 'neighbour'); */
if (data.borders){
    data.borders.forEach(async (item) => {
        const neighbour=await getNeighbour (item);
        renderCountry(neighbour, 'neighbour');
    });
}
  };
  
  viewCountry('Turkey');
  // console.log(globalData);

// ? ===============================================
// ?               FONKSİYONLAR
// ? ===============================================

// !------------------------------------------------
// ! 3.YONTEM  : ARROW FUNCTION
// !------------------------------------------------

console.log("**** ARROW ******");

//* ORNEK: Silindir Hacmi
//************************************************/

const r = Number(prompt("yaricap giriniz:"));
const h = Number(prompt("yukseklik giriniz:"));

const hacimHesapla = (r, h) => Math.PI * r * r * h;

// console.log(`${r} , ${h} => Hacmi: ${hacimHesapla(r, h).toExponential()}`);
console.log(`${r} , ${h} => Hacmi: ${hacimHesapla(r, h).toFixed(2)}`);

//* ORNEK: Yas hesapla
//************************************************/

const tarih = Number(prompt("Dogum Tarihini giriniz:"));

//! Arrow Func yontemi ile tanimlama
const yasHesapla = (tarih) => {
  const yas = new Date().getFullYear() - tarih;
  return yas;
};
console.log("YASINIZ:" + yasHesapla(tarih));

//?-----------------------------------------

// console.log("YASINIZ:" + yasHesapla2(tarih));
//!Funct expression ve arrow func yontemlerinde
//! Once fonks tanimlanmalidir sonra cagrilmalidir.
//! Aksi takdirde hata alrsiniz.

//! Func Expression yontemi ile tanimlama
const yasHesapla2 = function (tarih) {
  const yas = new Date().getFullYear() - tarih;
  return yas;
};
//?-----------------------------------------

console.log("YASINIZ:" + yasHesapla3(tarih));

//! Func Declaration yontemi ile tanimlama
function yasHesapla3(tarih) {
  const yas = new Date().getFullYear() - tarih;
  return yas;
}
//?-----------------------------------------