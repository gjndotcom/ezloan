/* ====== DANH SÁCH KHOẢN VAY — chỉnh sửa tại đây ======
   id   : mã offer trên Leadsmatcher
   name : tên hiển thị
   cc   : mã nước của bên cho vay (VN, MX, KZ...) → chỉ hiện cho người xem ở nước đó
          "ALL" = hiện cho mọi quốc gia (chỉ dùng khi offer không rõ nước)
   from : nước gốc của bên cho vay (theo tên offer) — người xem cùng nước sẽ thấy offer này trước
   logo : tên file trong thư mục logos/ (bỏ trống = hiện chữ viết tắt)
   epc  : EPC Weekly trên Leadsmatcher (26/11/2026) — web tự xếp offer EPC cao lên đầu, KHÔNG hiển thị cho người xem
   link : DÁN LINK "Get Link" CỦA BẠN VÀO ĐÂY. Còn trống thì nút Đăng ký sẽ bị khóa.
   pin  : true = ghim lên đầu cho người xem ở nước đó
   tags : nhãn hiển thị trên thẻ; guide: hướng dẫn riêng (xem mẫu VPBank)
   Thêm offer mới: copy 1 dòng và sửa. */
window.OFFERS = [
  /* ---- VPBank: vay tín chấp (AccessTrade) — hướng dẫn theo tài liệu "Hướng dẫn luồng vay tín chấp VPBank" ---- */
  {id:"vpbank",name:"VPBank – Vay tín chấp",cc:"VN",from:"VN",pin:true,
   logo:"https://www.google.com/s2/favicons?sz=128&domain=vpbank.com.vn",
   epc:0,link:"https://shorten.asia/2B4zAmf1",
   tags:["10 – 100 triệu","6 – 60 tháng","Không cần tài sản đảm bảo"],
   guide:{
    info:[["Hạn mức vay","10 – 100 triệu đồng"],["Kỳ hạn vay","6 – 60 tháng"],["Hình thức","Tín chấp, đăng ký online"],["Khu vực","Toàn quốc"]],
    req:["CCCD gắn chip","Từ 23 tuổi trở lên","Tuổi + thời gian vay không quá 70 tuổi","Có công việc và thu nhập","Không có nợ xấu, nợ quá hạn","Tài khoản thanh toán để nhận tiền giải ngân"],
    steps:[
     ["Mở link đăng ký","Bấm \"Đăng ký tại VPBank\" để vào trang đăng ký vay tín chấp online của VPBank."],
     ["Điền thông tin liên hệ","Nhập họ tên, email và số điện thoại chính chủ."],
     ["Xác thực OTP","Nhập mã OTP gửi về số điện thoại."],
     ["Chụp CCCD gắn chip","Chụp 2 mặt CCCD, hệ thống tự đọc thông tin. Kiểm tra lại và bấm xác nhận."],
     ["Thông tin cá nhân & công việc","Bổ sung thông tin cá nhân, công việc và thu nhập."],
     ["Nhận hạn mức & chọn khoản vay","Xem hạn mức đề xuất, chọn số tiền, kỳ hạn, ngày trả nợ gốc lãi hằng tháng và tài khoản nhận giải ngân."],
     ["Thông tin tham chiếu & FATCA","Nhập thông tin người tham chiếu và khai báo FATCA theo hướng dẫn."],
     ["Xác thực danh tính (eKYC)","Đã có tài khoản VPBank: xác thực sinh trắc học qua app VPBank NEO. Khách hàng mới: gọi video với nhân viên VPBank."],
     ["Ký hợp đồng điện tử","Đọc kỹ hợp đồng (lãi suất, phí, lịch trả nợ) rồi xác nhận bằng mã OTP."],
     ["Nhận tiền","Khoản vay được giải ngân tự động vào tài khoản bạn đã chọn."]],
    hours:["Khung giờ xử lý hồ sơ",["Gọi video – Thứ 2 đến Thứ 6","8:00 – 20:00"],["Gọi video – Thứ 7","8:00 – 14:00"],["Giải ngân – Thứ 2 đến Thứ 6","7:00 – 19:50"],["Giải ngân – Thứ 7","7:00 – 14:00"]],
    notesTitle:"Lưu ý khi đăng ký",
    notes:[
     "<b>Sinh trắc học:</b> bấm vào dòng chữ \"Hướng dẫn…\" trên màn hình để mở app VPBank. Không tự thoát trình duyệt rồi mở app, vì thông tin sẽ không đồng bộ về hồ sơ vay.",
     "<b>Đang có hồ sơ vay dở dang ở kênh khác:</b> chờ 7 ngày, không thao tác với hồ sơ nào, rồi đăng ký lại qua link.",
     "<b>Hệ thống báo lỗi hoặc chập chờn:</b> thử lại vào khung giờ khác.",
     "<b>Bảo hiểm không bắt buộc.</b> Nếu được gọi mời mua bảo hiểm mà bạn không có nhu cầu, hãy trả lời rõ \"Không đồng ý mua bảo hiểm\". Nếu đã bị thu phí bảo hiểm ngoài ý muốn, gọi tổng đài <b>1900 545415</b> để yêu cầu hoàn phí.",
     "<b>Phí tất toán trước hạn</b> (trả trước tối thiểu 2 triệu đồng): 5% số tiền trả trước nếu tất toán trong 12 tháng đầu, 3% từ tháng 13 đến 24, 1% sau 24 tháng.",
     "<b>Tất toán trên app VPBank NEO:</b> Khoản vay → chọn khoản vay → Quản lý → Tất toán → nhập thông tin theo yêu cầu."]
   }},
  {id:545,name:"Acredit",cc:"KZ",from:"KZ",logo:"acredit",epc:4.6242,link:"https://track.leadsmatcher.com/click?pid=8527&offer_id=545"},
  {id:1045,name:"SafeCredit",cc:"RO",from:"RO",logo:"safecredit",epc:1.5507,link:"https://track.leadsmatcher.com/click?pid=8527&offer_id=1045"},
  {id:508,name:"HoraCredit",cc:"RO",from:"RO",logo:"horacredit",epc:1.1775,link:"https://track.crezu.net/click?pid=8527&offer_id=508"},
  {id:762,name:"BSG Credit",cc:"RO",from:"RO",logo:"bsgcredit",epc:1.0439,link:"https://track.crezu.net/click?pid=8527&offer_id=762"},
  {id:841,name:"Mai Mai Credit",cc:"RO",from:"RO",logo:"maimaicredit",epc:0.648,link:"https://track.crezu.net/click?pid=8527&offer_id=841"},
  {id:513,name:"CreditFix",cc:"RO",from:"RO",logo:"creditfix",epc:0.5452,link:"https://track.crezu.net/click?pid=8527&offer_id=513"},
  {id:1171,name:"RonCredit",cc:"RO",from:"RO",logo:"roncredit",epc:0.5056,link:"https://track.leadsmatcher.com/click?pid=8527&offer_id=1171"},
  {id:743,name:"Cashspace",cc:"RO",from:"RO",logo:"cashspace-ro",epc:0.4937,link:"https://track.leadsmatcher.com/click?pid=8527&offer_id=743"},
  {id:111,name:"Швидко Гроші",cc:"UA",from:"UA",logo:"",epc:0.476,link:"https://track.crezu.net/click?pid=8527&offer_id=111"},
  {id:735,name:"Avinto",cc:"RO",from:"RO",logo:"avinto",epc:0.4745,link:"https://track.crezu.net/click?pid=8527&offer_id=735"},
  {id:742,name:"Smartcredito",cc:"ES",from:"ES",logo:"smartcredito",epc:0.4609,link:"https://track.crezu.net/click?pid=8527&offer_id=742"},
  {id:1306,name:"Kredit24",cc:"KZ",from:"KZ",logo:"",epc:0.4524,link:"https://track.leadsmatcher.com/click?pid=8527&offer_id=1306"},
  {id:307,name:"Credit365",cc:"KZ",from:"KZ",logo:"credit365",epc:0.4421,link:"https://track.crezu.net/click?pid=8527&offer_id=307"},
  {id:49,name:"Crezu",cc:"MX",from:"MX",logo:"crezu-mx",epc:0.3933,link:"https://track.leadsmatcher.com/click?pid=8527&offer_id=49"},
  {id:981,name:"Hay Credito",cc:"ES",from:"ES",logo:"haycredito",epc:0.3918,link:"https://track.leadsmatcher.com/click?pid=8527&offer_id=981"},
  {id:16,name:"Wandoo",cc:"ES",from:"ES",logo:"wandoo-es",epc:0.3858,link:"https://track.crezu.net/click?pid=8527&offer_id=16"},
  {id:47,name:"Crezu",cc:"ES",from:"ES",logo:"crezu-es",epc:0.3379,link:"https://track.leadsmatcher.com/click?pid=8527&offer_id=47"},
  {id:34,name:"Dineria",cc:"MX",from:"MX",logo:"dineria",epc:0.3258,link:"https://track.leadsmatcher.com/click?pid=8527&offer_id=34"},
  {id:744,name:"Cashspace",cc:"ES",from:"ES",logo:"cashspace-es",epc:0.3197,link:"https://track.leadsmatcher.com/click?pid=8527&offer_id=744"},
  {id:1151,name:"Real Credito",cc:"ES",from:"ES",logo:"realcredito",epc:0.3155,link:"https://track.leadsmatcher.com/click?pid=8527&offer_id=1151"},
  {id:1144,name:"AlemCredit",cc:"KZ",from:"KZ",logo:"alemcredit",epc:0.2975,link:"https://track.leadsmatcher.com/click?pid=8527&offer_id=1144"},
  {id:831,name:"Forzaem",cc:"KZ",from:"KZ",logo:"forzaem",epc:0.2768,link:"https://track.leadsmatcher.com/click?pid=8527&offer_id=831"},
  {id:472,name:"Cashspace",cc:"PL",from:"PL",logo:"cashspace-pl",epc:0.2669,link:"https://track.leadsmatcher.com/click?pid=8527&offer_id=472"},
  {id:642,name:"Cozmo",cc:"MX",from:"MX",logo:"cozmo",epc:0.263,link:"https://track.crezu.net/click?pid=8527&offer_id=642"},
  {id:70,name:"myKredit",cc:"ES",from:"ES",logo:"mykredit",epc:0.2425,link:"https://track.crezu.net/click?pid=8527&offer_id=70"},
  {id:401,name:"Finteres",cc:"ES",from:"ES",logo:"finteres-es",epc:0.2373,link:"https://track.leadsmatcher.com/click?pid=8527&offer_id=401"},
  {id:48,name:"AndaCrédito",cc:"ES",from:"ES",logo:"andacredito-es",epc:0.2295,link:"https://track.leadsmatcher.com/click?pid=8527&offer_id=48"},
  {id:590,name:"Tengeplus",cc:"KZ",from:"KZ",logo:"tengeplus",epc:0.2104,link:"https://track.leadsmatcher.com/click?pid=8527&offer_id=590"},
  {id:167,name:"Crezu",cc:"KZ",from:"KZ",logo:"crezu-kz",epc:0.1915,link:"https://track.leadsmatcher.com/click?pid=8527&offer_id=167"},
  {id:46,name:"AndaCrédito",cc:"MX",from:"MX",logo:"andacredito-mx",epc:0.1846,link:"https://track.leadsmatcher.com/click?pid=8527&offer_id=46"},
  {id:302,name:"BanCoppel",cc:"MX",from:"MX",logo:"coppel",epc:0.1777,link:"https://track.crezu.net/click?pid=8527&offer_id=302"},
  {id:1007,name:"Prestamiau",cc:"ES",from:"ES",logo:"prestamiau-es",epc:0.1621,link:"https://track.leadsmatcher.com/click?pid=8527&offer_id=1007"},
  {id:753,name:"Cashspace",cc:"MX",from:"MX",logo:"cashspace-mx",epc:0.1528,link:"https://track.leadsmatcher.com/click?pid=8527&offer_id=753"},
  {id:845,name:"Joytenge",cc:"KZ",from:"KZ",logo:"joytenge",epc:0.1521,link:"https://track.leadsmatcher.com/click?pid=8527&offer_id=845"},
  {id:514,name:"CreditPrime",cc:"RO",from:"RO",logo:"creditprime",epc:0.1403,link:"https://track.leadsmatcher.com/click?pid=8527&offer_id=514"},
  {id:888,name:"Prestamiau",cc:"MX",from:"MX",logo:"prestamiau-mx",epc:0.1363,link:"https://track.leadsmatcher.com/click?pid=8527&offer_id=888"},
  {id:906,name:"Wandoo",cc:"PE",from:"PE",logo:"wandoo-pe",epc:0.1352,link:"https://track.leadsmatcher.com/click?pid=8527&offer_id=906"},
  {id:194,name:"Pezetita",cc:"ES",from:"ES",logo:"pezetita",epc:0.1338,link:"https://track.leadsmatcher.com/click?pid=8527&offer_id=194"},
  {id:576,name:"Crezu",cc:"RO",from:"RO",logo:"crezu-ro",epc:0.1308,link:"https://track.leadsmatcher.com/click?pid=8527&offer_id=576"},
  {id:353,name:"Finteres",cc:"MX",from:"MX",logo:"finteres-mx",epc:0.1303,link:"https://track.leadsmatcher.com/click?pid=8527&offer_id=353"},
  {id:187,name:"VayVnd",cc:"VN",from:"VN",logo:"vayvnd",epc:0.1297,link:"https://track.crezu.net/click?pid=8527&offer_id=187"},
  {id:1200,name:"Plamigo",cc:"MX",from:"MX",logo:"plamigo",epc:0.1263,link:"https://track.leadsmatcher.com/click?pid=8527&offer_id=1200"},
  {id:84,name:"Crezu",cc:"CO",from:"CO",logo:"crezu-co",epc:0.1259,link:"https://track.leadsmatcher.com/click?pid=8527&offer_id=84"},
  {id:1177,name:"Crezu",cc:"MY",from:"MY",logo:"crezu-my",epc:0.1216,link:"https://track.leadsmatcher.com/click?pid=8527&offer_id=1177"},
  {id:758,name:"Adacash",cc:"MY",from:"MY",logo:"adacash",epc:0.1202,link:"https://track.leadsmatcher.com/click?pid=8527&offer_id=758"},
  {id:1173,name:"Jabulani Money",cc:"ZA",from:"ZA",logo:"jabulani",epc:0.118,link:"https://track.leadsmatcher.com/click?pid=8527&offer_id=1173"},
  {id:1227,name:"Cashgist",cc:"ZA",from:"ZA",logo:"cashgist",epc:0.117,link:"https://track.leadsmatcher.com/click?pid=8527&offer_id=1227"},
  {id:487,name:"Doctor Peso",cc:"CO",from:"CO",logo:"doctorpeso",epc:0.1008,link:"https://track.leadsmatcher.com/click?pid=8527&offer_id=487"},
  {id:1011,name:"VayMeo",cc:"VN",from:"VN",logo:"vaymeo",epc:0,link:"https://track.leadsmatcher.com/click?pid=8527&offer_id=1011"}
];

/* Thông tin theo quốc gia: ngôn ngữ hiển thị, giấy tờ tùy thân, tiền tệ */
window.COUNTRIES = {
  VN:{lang:"vi",id:"CCCD gắn chip",cur:"VND"},
  MX:{lang:"es",id:"INE + CURP",cur:"MXN"},
  PE:{lang:"es",id:"DNI",cur:"PEN"},
  CO:{lang:"es",id:"Cédula de ciudadanía",cur:"COP"},
  ES:{lang:"es",id:"DNI / NIE",cur:"EUR"},
  KZ:{lang:"ru",id:"Удостоверение личности (ИИН)",cur:"KZT"},
  RO:{lang:"ro",id:"Carte de identitate (CNP)",cur:"RON"},
  DE:{lang:"de",id:"Personalausweis",cur:"EUR"},
  PL:{lang:"pl",id:"Dowód osobisty (PESEL)",cur:"PLN"},
  SE:{lang:"en",id:"BankID",cur:"SEK"},
  ZA:{lang:"en",id:"South African ID",cur:"ZAR"},
  PH:{lang:"en",id:"Government-issued ID",cur:"PHP"},
  MY:{lang:"en",id:"MyKad",cur:"MYR"},
  LK:{lang:"en",id:"NIC",cur:"LKR"},
  UA:{lang:"en",id:"ID card / Passport",cur:"UAH"}
};
