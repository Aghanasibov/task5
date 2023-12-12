
class Heyvan {
    constructor(ad) {
      this.ad = ad;
    }
  
    sesCixar() {
      return this.tukRengi();
    }
  
    tukRengi() {
      return `${this.ad} bir növün tük rəngine sahibdir.`;
    }
  }
  
  class Pisik extends Heyvan {
    constructor(ad, tur) {
      super(ad);
      this.tur = tur;
    }
  
    tukRengi() {
      return `${this.ad} adlı pişik ${this.tur} növündə və qara tük rənginə sahibdir.`;
    }
  }
  
  class It extends Heyvan {
    constructor(ad, irq) {
      super(ad);
      this.irq = irq;
    }
  
    oyunOynayir() {
      return `${this.ad} adlı it ${this.irq} növündədir və oyun oynaması sevir.`;
    }
  }
  
  class Qus extends Heyvan {
    constructor(ad, qanadUzunlugu) {
      super(ad);
      this.qanadUzunlugu = qanadUzunlugu;
    }
  
    ucabiler() {
      return `${this.ad} adlı quş, kanad eni ${this.qanadUzunlugu} sm olan bir növdir və uçabilir.`;
    }
  }
  
  const heyvan = new Heyvan('Mestan');
  const kedi = new Pisik('Mestan', 'Yasamal pişiyi');
  const it = new It('Toplan', 'Küçə iti');
  const quş = new Qus('Qartal', 20);
  
  const outputDiv = document.getElementById('output');
  const showInfoButton = document.getElementById('showInfoButton');
  
  showInfoButton.addEventListener('click', function() {
    outputDiv.innerHTML = '';
    outputDiv.innerHTML += heyvan.sesCixar() + '<br>';
    outputDiv.innerHTML += kedi.sesCixar() + '<br>';
    outputDiv.innerHTML += it.oyunOynayir() + '<br>';
    outputDiv.innerHTML += quş.ucabiler() + '<br>';
  });
  