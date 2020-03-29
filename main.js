/* START DEFINING SEMANTIC */

let body = document.body;

//judul
let divJudul = document.createElement('div');
divJudul.setAttribute('id', 'judul');
body.appendChild(divJudul);
let judul = document.createElement('h2');
let judulTeks = document.createTextNode('GAME CAK LEMPER');
judul.appendChild(judulTeks);
divJudul.appendChild(judul);

//peraturan
let divPeraturan = document.createElement('div');
divPeraturan.setAttribute('id', 'peraturan');
body.appendChild(divPeraturan);

//papan permainan
let divPapan = document.createElement('div');
divPapan.setAttribute('id', 'papan');
body.appendChild(divPapan);

/* END DEFINING SEMANTIC */

let bank = 
    [
        {
            id: 1,
            soal: "Binatang yang mirip penyu .....",
            clue: "_ _ _ A _ _ _ _",
            clueIndex: 3,
            jawaban: "KAKAKNYA",
            penjelasan: "Namanya juga kakak adek ya mirip"
        }
    ]

let butirPeraturan = 
    [
        "Kerahkan seluruh kecerdasan Anda",
        "10 soal akan dihadapkan kepada Anda", 
        "Setiap 1 soal, Anda hanya memiliki 3 kali kesempatan untuk menjawab",
        "Untuk mempermudah, Anda akan diberi petunjuk berupa: jumlah karakter dan 1 huruf bantuan",
        "Tekan tombol huruf yang tersedia untuk mengisi garis kosong", 
        "Tekan submit jika Anda sudah yakin dengan jawaban Anda", 
        "Ingat, sebelum submit, pastikan Anda sudah memakai seluruh kecerdasan Anda dalam menjawab"
    ]

let peraturanSudahTampil = false
var jumlahBenar = 0
var jumlahKesempatan = 3
var balik = false
var selectedID = 0


function generatePeraturan(){
    if(balik==true){
        balik=false
        papan.removeChild(thanks)
    }

    let peraturan = 'Peraturan: <ol>'

    for(let i=0;i<butirPeraturan.length;i++){
        peraturan += '<li>'+butirPeraturan[i]+'</li>'
    }

    peraturan += '</ol><button id="mulai" onClick="generateSoal(0)">Mulai</button>'

    document.getElementById('peraturan').innerHTML = peraturan;
    peraturanSudahTampil = true
}


function generateSoal(selectedID){
    if(selectedID==0){
        body.removeChild(peraturan);
    }
    
    if(selectedID<10){

        let divNomor = document.createElement('div');
        divNomor.setAttribute('id', 'nomor');
        papan.appendChild(divNomor);
        let nomor = document.createElement('p');
        divNomor.appendChild(nomor);

        let divKesempatan = document.createElement('div');
        divKesempatan.setAttribute('id', 'kesempatan');
        papan.appendChild(divKesempatan);
        var p = document.createElement('p');
        p.setAttribute('id', 'idP');
        var kesempatanTeks = 'Sisa kesempatan: '+jumlahKesempatan;
        var kesempatanTeks = document.createTextNode(kesempatanTeks);
        p.appendChild(kesempatanTeks);
        divKesempatan.appendChild(p);

        let divSoal = document.createElement('div');
        divSoal.setAttribute('id', 'soalnya');
        papan.appendChild(divSoal);
        let soal = document.createElement('strong');
        let soalTeks = document.createTextNode(bank[selectedID]['soal']);
        soal.appendChild(soalTeks);
        divSoal.appendChild(soal);

        let divClue = document.createElement('div');
        divClue.setAttribute('id', 'cluenya');
        papan.appendChild(divClue);
        let clue = document.createElement('h3');
        var clueTeks = document.createTextNode(bank[selectedID]['clue']);
        clue.appendChild(clueTeks);
        divClue.appendChild(clue);

        let divFormJawaban = document.createElement('div');
        divFormJawaban.setAttribute('id', 'jawaban');
        papan.appendChild(divFormJawaban);
        let pJawaban = document.createElement('p');
        var teks = document.createTextNode('Jawaban: ');
        pJawaban.appendChild(teks);
        divFormJawaban.appendChild(pJawaban);
        let inputJawaban = document.createElement('input');
        inputJawaban.setAttribute('id', 'input');
        inputJawaban.setAttribute('type', 'text');
        inputJawaban.setAttribute('value', '');
        pJawaban.appendChild(inputJawaban);
        let buttonSubmit = document.createElement('button');
        buttonSubmit.setAttribute('id','submit')
        buttonSubmit.setAttribute('onclick','submit(selectedID)')
        var teks = document.createTextNode('Submit');
        buttonSubmit.appendChild(teks);
        pJawaban.appendChild(buttonSubmit);

        selectedID++
    }
    
}



function submit(selectedID){
    let key = bank[selectedID]['jawaban'].toUpperCase();
    let penjelasan = bank[selectedID]['penjelasan']
    let soal = bank[selectedID]['soal']
    let clue = bank[selectedID]['clue']
    let clueIndex = bank[selectedID]['clueIndex']

    let answer = document.getElementById("input").value.toUpperCase();
    
    if(answer===''){
        alert('Isi dulu kali')
    }else{
        if(answer.length!==key.length){
            alert('Jumlah karakternya: '+key.length)
        }else{
            if(key[clueIndex]!==answer[clueIndex]){
                let index = clueIndex+1
                alert('Perhatikan. Huruf ke-'+index+' adalah '+key[clueIndex])
            }else{
                if(key==answer){
                    alert('Ciee beneeer. '+penjelasan)
                    papan.removeChild(nomor)
                    papan.removeChild(kesempatan)
                    papan.removeChild(soal)
                    papan.removeChild(clue)
                    papan.removeChild(jawaban)
                    let divThanks = document.createElement('div');
                    divThanks.setAttribute('id', 'thanks');
                    papan.appendChild(divThanks);
                    let thanks = document.createElement('strong');
                    let thanksText = document.createTextNode('Terimakasih');
                    thanks.appendChild(thanksText);
                    divThanks.appendChild(thanks);
                }else{
                    if(jumlahKesempatan==1){
                        alert('Yahh kesempatan sudah habis. Lebih cerdas lagi ya')
                        papan.removeChild(nomor)
                        papan.removeChild(kesempatan)
                        papan.removeChild(soalnya)
                        papan.removeChild(cluenya)
                        papan.removeChild(jawaban)
                        let divPeraturan = document.createElement('div');
                        divPeraturan.setAttribute('id', 'peraturan');
                        body.appendChild(divPeraturan);
                        let divThanks = document.createElement('div');
                        divThanks.setAttribute('id', 'thanks');
                        papan.appendChild(divThanks);
                        let thanks = document.createElement('strong');
                        let thanksText = document.createTextNode('Terimakasih');
                        thanks.appendChild(thanksText);
                        divThanks.appendChild(thanks);
                        let buttonPenasaran = document.createElement('button');
                        buttonPenasaran.setAttribute('id','penasaran')
                        peraturanSudahTampil = false
                        balik=true
                        buttonPenasaran.setAttribute('onclick','generatePeraturan()')
                        var teks = document.createTextNode('Penasaran? Coba lagi');
                        buttonPenasaran.appendChild(teks);                        
                        divThanks.appendChild(buttonPenasaran);
                    }else{
                        alert('Salah. Sabarr coba lagi yuk bisa yuk')
                        jumlahKesempatan--
                        document.getElementById("idP").innerHTML = 'Sisa kesempatan: '+jumlahKesempatan;
                    }
                }
            }
        }
    }
}

if(!peraturanSudahTampil){
    generatePeraturan();
}

