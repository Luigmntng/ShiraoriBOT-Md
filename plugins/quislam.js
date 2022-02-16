let handler = async (m, { conn, usedPrefix, command }) => {
  await conn.reply(m.chat, `“${pickRandom(global.qislam)}”`, '', '', m)
}
handler.help = ['qislam']
handler.tags = ['quotes']
handler.command = /^(qislam)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

// https://jalantikus.com/tips/kata-kata-bucin/
global.qislam = [
"Dunia ini penjara bagi orang beriman dan surga bagi orang kafir.",
"Hidup adalah sebuah perjalanan, yakni perjalanan dari Allah yang kemudian kembali lagi kepada Allah.",
"Angin tidak berhembus untuk menggoyangkan pepohonan, melainkan menguji kekuatan akarnya.,
"Setiap napas baru yang Allah izinkan untuk kamu ambil bukan hanya berkah, tetapi juga tanggung jawab.",
"Jangan menunggu kaya untuk bersedekah, justru sebaiknya bersedekahlah untuk bisa membuka pintu rezeki dan juga harta.",
"Tidak ada pemberian yang lebih utama dari orangtua kepada anaknya, selain daripada akhlak yang mulia.",
"Manusia yang paling baik yaitu manusia yang baik budi pekertinya dan bermanfaat bagi orang lain.",
"Belajarlah untuk memaafkan, dirimu yang pertama dan kemudian yang lain.",
"Jangan takut untuk gagal. Kegagalan tidak fatal, ambil pelajarannya, lalu bangkit kembali dan coba lagi.",
"Pilih teman-temanmu dengan hati-hati, rencanakan masa depanmu dengan tujuan, dan bingkai kehidupanmu dengan iman.",
"Hidup adalah ibadah yang penuh dengan ujian.",
"Hidup bersama siapa adalah suatu pilihan, tetapi hidup untuk Allah adalah suatu keharusan.",
"Ingatlah Allah saat hidup tak berjalan sesuai keinginanmu. Allah pasti punya jalan yang lebih baik untukmu.",
"Berdoalah, Allah mendengarmu. Bersabarlah karena Allah akan menjawab doamu pada waktu yang tepat.",
"Allah selalu menjawab doamu dengan 3 cara. Pertama, langsung mengabulkannya. Kedua, menundanya. Ketiga, menggantinya dengan yang lebih baik untukmu.",
"Kebanyakan dari kita tidak mensyukuri apa yang sudah kita miliki, tetapi kita menyesali apa yang belum kita capai.",
"Jangan hanya berterima kasih kepada Allah ketika semuanya berjalan baik, terima kasih kepada-Nya bahkan ketika segala sesuatunya terasa sulit.",
"Jangan sekali-kali merasa malu memberi walaupun sedikit, sebab tidak memberi sama sekali pasti lebih sedikit nilainya.",
"Jika Allah memberi kamu nikmat sepotong roti saja, syukurilah itu, karena Allah tidak membuat kamu meminta-minta kepada orang lain untuk mendapatkan itu.",
"Bersyukurlah jika Allah memberimu ujian hidup, karena dengan demikian, Allah memberikanmu kesempatan untuk berubah menjadi manusia yang lebih baik lagi.",
"Kebanyakan dari kita tidak mensyukuri apa yang sudah kita miliki, tetapi kita menyesali apa yang belum kita capai.",
"Ciri dari kelalaian manusia ialah ketika ia seringkali mengeluh ketika menerima ujian pun jarang bersyukur ketika mendapatkan nikmat yang luar biasa.",
"Dunia hanyalah satu tetes nikmat Allah di antara lautan nikmat-Nya. Jadi, apakah kamu puas hanya dengan memiliki dunia?
"Bila tak kunyatakan keindahan-Mu dalam kata, Kusimpan kasih-Mu dalam dada.  Jalaluddin Rumi",
"Apabila sesuatu yang kau senangi tidak terjadi maka senangilah apa yang terjadi.  Ali bin Abi Thalib",
"Memang sangat sulit untuk bersabar, tetapi menyia-nyiakan pahala dari kesabaran itulah yang lebih buruk. - Abu Bakar",
"Jangan berduka, apa pun yang hilang darimu akan kembali lagi dalam wujud lain.  Jalaludin Rumi",
"Jangan melibatkan hatimu dalam kesedihan atas masa lalu atau kamu tidak akan siap untuk apa yang akan datang. Ali bin Abi Thalib",
"Kesabaran itu ada dua macam: sabar atas sesuatu yang tidak kau ingin dan sabar menahan diri dari sesuatu yang kau ingini. Ali bin Abi Thalib",
"Jauhilah dengki, karena dengki memakan amal kebaikan sebagaimana api memakan kayu bakar. Nabi Muhammad SAW",
"Balas dendam terbaik adalah menjadikan dirimu lebih baik. Ali bin Abi Thalib",
"Berpikirlah positif, tidak peduli seberapa keras kehidupanmu. Ali bin Abi Thalib",
"Kita adalah makhluk yang suka menyalahkan dari luar, tidak menyadari bahwa masalah biasanya dari dalam. Abu Hamid Al Ghazali",
"Orang yang terkaya adalah orang yang menerima pembagian (taqdir) dari Allah dengan senang hati. Ali bin Husein",
"Saat masalahmu jadi terlalu berat untuk ditangani, beristirahatlah dan hitung berkah yang sudah kau dapatkan.",
"Mengeluh hanya akan membuat hidup kita semakin tertekan, sedangkan bersyukur akan senantiasa membawa kita pada jalan kemudahan.",
"Hidup adalah sebuah perjalanan, yakni perjalanan dari Allah yang kemudian kembali lagi kepada Allah.",
"Allah tahu apa yang terbaik buat kamu dan kapan waktu yang tepat untuk kamu memilikinya.",
"Keimanan membuat seseorang cinta dengan kematian. Kekufuran membuat seseorang takut terhadapnya.",
"Jangan biarkan cintamu menjadi keterikatan atau kebencianmu menjadi kehancuran. Umar bin Khattab",
"Bersabarlah terhadap apa yang menimpa kamu. Q.S Luqman:17",
"Dan barangsiapa yang bertakwa kepada Allah, niscaya Allah menjadikan baginya kemudahan dalam urusannya. Q.S At-Talaq: 4",
"Dialah yang menghidupkan dan mematikan, dan hanya kepada-Nya lah kamu akan dikembalikan. Q.S Yunus: 56",
"Maka sesungguhnya bersama kesulitan itu ada kemudahan. QS. Al Insyirah 5",
"Dan bersabarlah, karena sesungguhnya Allah tidak menyia-nyiakan pahala orang yang berbuat kebaikan. Q.S Huud: 115",
"Jadikanlah sabar dan salat sebagai penolongmu, sesungguhnya Allah bersama orang-orang yang sabar. Q.S Al-Baqarah: 153",
"Allah tidak membebani seseorang melainkan sesuai dengan kesanggupannya. Al-Baqarah: 286",
"Janganlah kamu berduka cita, sesungguhnya Allah selalu bersama kita. QS At Taubah 40",
"Sesungguhnya Allah tidak akan mengubah keadaan suatu kaum hingga mereka merubah keadaan yang ada pada diri mereka sendiri. - Q.S. Ar Rad:11",
"Sesungguhnya kematian yang kamu lari daripadanya, maka sesungguhnya kematian itu akan menemui kamu. Q.S Al-Jumuah: 8",
"Agama seseorang sesuai dengan agama teman dekatnya. Hendaklah kalian melihat siapakah yang menjadi teman dekatnya.” HR. Abu Daud, Trimidzi",
"Barang siapa yang tidak mensyukuri yang sedikit, maka ia tidak akan mampu mensyukuri sesuatu yang banyak. HR. Ahmad",
"Engkau beribadah kepada Allah seakan-akan engkau melihat-Nya. Jika engkau tidak melihat-Nya, sesungguhnya dia pasti melihatmu. HR Muslim",
"Orang yang cerdas adalah orang yang mengendalikan dirinya dan bekerja untuk kehidupan setelah kematian. HR. Tirmidzi",
"Cinta yang terjadi karena Allah tidak akan pernah berakhir.  H.R. Muslim",
"Apa pun yang kamu keluarkan untuk keluargamu akan menjadi sumber pahala dari Allah. Bahkan sepotong makanan yang kamu suapkan ke mulut istrimu. Nabi Muhammad SAW",
"Ketahuilah bahwa kemenangan bersama kesabaran, kelapangan bersama kesempitan, dan kesulitan bersama kemudahan. (HR Tirmidzi)",
"Bangunlah pagi hari untuk mencari rezeki dan kebutuhan-kebutuhanmu. Sesungguhnya pada pagi hari terdapat barakah dan keberuntungan. HR At-Thabrani dan Al-Bazzar",
"Kerjakanlah urusan duniamu seakan-akan kamu hidup selamanya dan laksanakanlah urusan akhiratmu seakan-akan kamu akan mati besok. HR. Ibnu Asakir",
"Seandainya anak cucu adam mempunyai harta sepuluh lembah, tentu dia masih ingin memiliki yang ketiga. Padahal yang mengisi perut anak cucu adam itu hanyalah tanah. HR. Muslim",
]
