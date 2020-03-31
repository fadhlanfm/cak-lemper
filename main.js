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
        },
        {
            id: 2,
            soal: "Tikus takut kalo dikejar .....",
            clue: "K _ _ _ _ _",
            clueIndex: 0,
            jawaban: "KOMODO",
            penjelasan: "Anda dikejar komoda lari ga? Apalagi tikus"
        },
        {
            id: 3,
            soal: "Saat turun hujan, biasanya kita sedia.....",
            clue: "_ A _ _ _ _",
            clueIndex: 1,
            jawaban: "KANMIE",
            penjelasan: "Pake telor sama cabe rawit. Syahdu"
        },
        {
            id: 4,
            soal: "Makanan yang terbuat dari kedelai .....",
            clue: "T _ _ _ _",
            clueIndex: 0,
            jawaban: "TAHUO",
            penjelasan: "Tahu bulat. Digoreng dadakan"
        },
        {
            id: 5,
            soal: "Kita bisa melihat wajah kita sendiri di .....",
            clue: "_ _ _ A",
            clueIndex: 3,
            jawaban: "SIMA",
            penjelasan: "Di SIMC juga bisa"
        },
        {
            id: 6,
            soal: "Temannya Nobita .....",
            clue: "S _ _ _ _ _ _",
            clueIndex: 0,
            jawaban: "SEDIKIT",
            penjelasan: "Paling cuman doraemon, shizuka, suneo, giant, dekisugi, udah"
        },
        {
            id: 7,
            soal: "Kendaraan tidak bisa jalan jika banya.....",
            clue: "K _ _ _ _ _",
            clueIndex: 0,
            jawaban: "KORANG",
            penjelasan: "Macet dong kalo banyakorang"
        },
        {
            id: 8,
            soal: "Mas kawin dibayar .....",
            clue: "_ U _ _ _",
            clueIndex: 1,
            jawaban: "SUAMI",
            penjelasan: "Masa dibayar penghulu"
        },
        {
            id: 9,
            soal: "Selain dapat piala, pemenang olimpiade juga dapat .....",
            clue: "_ _ _ A _ _",
            clueIndex: 3,
            jawaban: "PULANG",
            penjelasan: "Selesai olimpiade, menang atau kalah, seluruh atlet dapat pulang ke negaranya masing-masing"
        },
        {
            id: 10,
            soal: "Tidak masuk kerja karena Hari .....",
            clue: "_ I _ _ _",
            clueIndex: 1,
            jawaban: "DIPHK",
            penjelasan: "Hari menjadi pengangguran setelah diphk"
        }
    ]

let butirPeraturan = 
    [
        "10 soal akan dihadapkan kepada Anda", 
        "Setiap soal, terdiri dari 2 kali kesempatan untuk menjawab",
        "Untuk mempermudah, Anda akan diberi petunjuk berupa: jumlah karakter dan 1 huruf bantuan",
        "Tekan submit jika Anda sudah yakin dengan jawaban Anda", 
        "Ingat, sebelum submit, pastikan Anda sudah yakin dengan jawaban Anda"
    ]

var jumlahBenar = 0
var jumlahKesempatan = 2
var selectedID = 0

function plusOne(variable){
    return variable++
}

function generatePeraturan(){
    let peraturan = 'Peraturan: <ol>'

    for(let i=0;i<butirPeraturan.length;i++){
        peraturan += '<li>'+butirPeraturan[i]+'</li>'
    }
    
    peraturan += '</ol><button id="mulai" onClick="generateSoal(selectedID)">Mulai</button>'

    document.getElementById('peraturan').innerHTML = peraturan;
}

function generateSoal(selectedID){

    //papan permainan
    let divPapan = document.createElement('div');
    divPapan.setAttribute('id', 'papan');
    body.appendChild(divPapan);

    if(selectedID==0){
        body.removeChild(peraturan);
    }
    
    if(selectedID<10){

        let divNomor = document.createElement('div');
        divNomor.setAttribute('id', 'nomor');
        papan.appendChild(divNomor);
        let nomor = document.createElement('p');
        var nomorTeks = 'Soal ke '+bank[selectedID]['id']+' dari 10';
        var nomorTeks = document.createTextNode(nomorTeks);
        nomor.appendChild(nomorTeks);
        divNomor.appendChild(nomor);

        let divScore = document.createElement('div');
        divScore.setAttribute('id', 'score');
        papan.appendChild(divScore);
        var p = document.createElement('p');
        p.setAttribute('id', 'idS');
        var scoreTeks = 'Score: '+jumlahBenar;
        var scoreTeks = document.createTextNode(scoreTeks);
        p.appendChild(scoreTeks);
        divScore.appendChild(p);

        let divSoal = document.createElement('div');
        divSoal.setAttribute('id', 'soal');
        papan.appendChild(divSoal);
        let soal = document.createElement('strong');
        let soalTeks = document.createTextNode(bank[selectedID]['soal']);
        soal.appendChild(soalTeks);
        divSoal.appendChild(soal);

        let divClue = document.createElement('div');
        divClue.setAttribute('id', 'clue');
        papan.appendChild(divClue);
        let clue = document.createElement('h3');
        var clueTeks = document.createTextNode(bank[selectedID]['clue']);
        clue.appendChild(clueTeks);
        divClue.appendChild(clue);

        let divFormJawaban = document.createElement('div');
        divFormJawaban.setAttribute('id', 'jawaban');
        papan.appendChild(divFormJawaban);
        //<div id=jawaban> created
        let pJawaban = document.createElement('p')
        pJawaban.setAttribute('id','x');
        divFormJawaban.appendChild(pJawaban);
        let inputJawaban = document.createElement('input');
        inputJawaban.setAttribute('id', 'input');
        inputJawaban.setAttribute('type', 'text');
        inputJawaban.setAttribute('placeholder', 'huruf gede/kecil/campur boleh');
        pJawaban.appendChild(inputJawaban);
        // let buttonSubmit = document.createElement('button');
        // buttonSubmit.setAttribute('id','submit')
        // buttonSubmit.setAttribute('onclick','submit(x)')
        let buttonSubmit = 'Jawaban: <input id="input" type="text" placeholder="huruf kecil ga masalah"><button id="buttonSubmit" onClick="submit('+selectedID+')">Submit</button>'

        document.getElementById('x').innerHTML = buttonSubmit;
        
        // var teks = document.createTextNode('Submit');
        // buttonSubmit.appendChild(teks);
        // pJawaban.appendChild(buttonSubmit);

        let divKesempatan = document.createElement('div');
        divKesempatan.setAttribute('id', 'kesempatan');
        papan.appendChild(divKesempatan);
        var p = document.createElement('p');
        p.setAttribute('id', 'idP');
        var kesempatanTeks = 'Sisa kesempatan: '+jumlahKesempatan;
        var kesempatanTeks = document.createTextNode(kesempatanTeks);
        p.appendChild(kesempatanTeks);
        divKesempatan.appendChild(p);
    }else{
        let divThanks = document.createElement('div');
        divThanks.setAttribute('id', 'thanks');
        papan.appendChild(divThanks);
        let thanks = document.createElement('p');
        thanks.setAttribute('id', 'a');
        divThanks.appendChild(thanks);
        let thanksText = '<p>Terimakasih</p><p>Score anda: '+jumlahBenar+'/10</p><p>Silahkan share game ini, tapi jangan kasih tau jawabannya ya</p><p><strong>Terimakasih dan Sehat Selalu</strong></p><p><small>Soal-soal diambil dari WIB NETTV</small></p>'
        document.getElementById('a').innerHTML = thanksText;
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
        alert('Isi dulu keleus')
    }else{
        if(answer.length!==key.length){
            alert('Jumlah karakternya: '+key.length)
        }else{
            if(key[clueIndex]!==answer[clueIndex]){
                let index = clueIndex+1
                alert('Perhatikan. Huruf ke-'+index+' adalah '+key[clueIndex])
            }else{
                if(key==answer){
                    jumlahBenar++
                    selectedID++
                    alert('Cie bener.\nSoal: '+soal+'\n'+clue+'\n'+'Jawaban: '+key+'\n'+penjelasan)
                    jumlahKesempatan=3
                    body.removeChild(papan);
                    generateSoal(selectedID)
                }else{
                    if(jumlahKesempatan==1){
                        jumlahKesempatan--
                        document.getElementById("idP").innerHTML = 'Sisa kesempatan: '+jumlahKesempatan;
                        selectedID++
                        alert('Soal: '+soal+'\n'+clue+'\n'+'Jawaban: '+key+'\n'+penjelasan+'\nLebih semangat lagi ya')
                        jumlahKesempatan=3
                        body.removeChild(papan);
                        generateSoal(selectedID)
                    }else{
                        jumlahKesempatan--
                        document.getElementById("idP").innerHTML = 'Sisa kesempatan: '+jumlahKesempatan;
                        alert('Salah. Coba lagi yuk bisa yuk')
                    }
                }
            }
        }
    }
    
}

generatePeraturan();