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
   logo:"vpbank.svg",
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
  /* ---- VPBank: mở thẻ tín dụng online (AccessTrade) — theo "Tài liệu HD mở thẻ VPBank" ---- */
  {id:"vpbankcard",name:"VPBank – Mở thẻ tín dụng online",cc:"VN",from:"VN",pin:true,
   logo:"vpbank.svg",
   epc:0,link:"https://shorten.asia/A9R32ABP",
   tags:["Hạn mức đến 100 triệu","Mở thẻ 100% online","Nhiều dòng thẻ hoàn tiền"],
   guide:{
    info:[["Hạn mức thẻ","5 – 100 triệu (tùy dòng thẻ)"],["Lãi suất thẻ","2,79% – 3,99%/tháng"],["Phí thường niên","150.000đ – 1.200.000đ (chưa VAT)"],["Phê duyệt","Kết quả sau vài phút"]],
    req:["CCCD gắn chip hoặc Căn cước mới","Độ tuổi khoảng 23 – 60","Có công việc, thu nhập ổn định (nhận cả người có lương hưu)","Chưa có thẻ tín dụng VPBank","Không có nợ xấu, nợ quá hạn","Số điện thoại chính chủ, dùng trên 1 tháng"],
    table:{title:"Các dòng thẻ có thể mở",
     head:["Dòng thẻ","Hạn mức","Lãi suất/tháng","Phí thường niên","Ưu đãi chính"],
     rows:[
      ["No.1","10 – 30 triệu","3,99%","150.000đ","Rút tiền mặt không mất phí, tích điểm, trả góp"],
      ["MC2","10 – 70 triệu","3,99%","299.000đ","Tích điểm đổi quà, trả góp"],
      ["StepUp / Lady","30 – 100 / 20 – 100 triệu","3,29%","499.000đ","Hoàn tiền, trả góp, giảm giá tại đối tác"],
      ["JCB Z","20 – 100 triệu","3,99%","399.000đ","Hoàn tiền, quà chào mừng"],
      ["Shopee / Super Shopee","5 – 100 / 15 – 100 triệu","3,99% / 3,29%","299.000đ / 499.000đ","Hoàn tiền, lượt giao hàng miễn phí"],
      ["VNA Platinum","40 – 100 triệu","2,99%","899.000đ","Tích dặm bay Vietnam Airlines"],
      ["Visa Platinum Travel","40 – 100 triệu","2,99%","899.000đ","Tích Travel Miles, trả góp"],
      ["Visa Signature Travel Miles","60 – 100 triệu","2,79%","1.200.000đ","Tích Travel Miles, miễn phí năm đầu"]],
     note:"Phí chưa gồm VAT. Điều kiện miễn phí thường niên năm đầu khác nhau theo từng thẻ. Dòng thẻ được mở tùy kết quả xét duyệt; ưu đãi có thể thay đổi — xem chi tiết tại vpbank.com.vn."},
    steps:[
     ["Mở link bằng trình duyệt","Bấm \"Đăng ký tại VPBank\". Nên mở bằng Chrome hoặc Safari; nếu đang ở Zalo/Messenger, hãy sao chép link và dán vào trình duyệt để chụp CCCD không bị lỗi."],
     ["Nhập số điện thoại & OTP","Dùng số chính chủ, đã dùng trên 1 tháng. Mã OTP nhận tối đa 4 lần trong 48 giờ."],
     ["Thông tin công việc & email","Nhập tên công ty đầy đủ (chỉ viết tắt TNHH, CTCP…). Làm tự do/kinh doanh thì ghi tên công việc, ví dụ \"Hộ kinh doanh ABC\". Nhập đúng email để nhận thông tin thẻ."],
     ["Thông tin CCCD","Quét mã QR trên CCCD hoặc tự nhập. Kiểm tra kỹ ngày cấp, ngày hết hạn, ngày sinh; người sinh năm 1995 trở về trước cần nhập số CMND cũ."],
     ["Địa chỉ hiện tại & xác nhận","Nhập đầy đủ nơi đang ở (cả số phòng nếu ở chung cư), rồi xác nhận lại toàn bộ thông tin."],
     ["Chọn dòng thẻ","Chờ duyệt sơ bộ khoảng 1 phút, sau đó vuốt để chọn dòng thẻ phù hợp."],
     ["Chụp CCCD & khuôn mặt","Chụp 2 mặt CCCD và xác thực khuôn mặt."],
     ["Thông tin bổ sung & nơi nhận thẻ","Nhập người liên hệ khẩn cấp (đã kết hôn thì là vợ/chồng; không điền chính mình) và chọn nhận thẻ tại công ty hoặc địa chỉ hiện tại."],
     ["Gọi video hoặc ký hợp đồng điện tử","Nếu được yêu cầu gọi video, link sẽ gửi qua Zalo OA VPBank về số điện thoại đăng ký. Nếu không, ký hợp đồng điện tử bằng OTP."],
     ["Nhận kết quả & kích hoạt thẻ","Kết quả cuối cùng sau khoảng 5 phút. Khi nhận thẻ, kích hoạt trên app VPBank NEO."]],
    notesTitle:"Lưu ý để hồ sơ được duyệt",
    notes:[
     "<b>Ảnh CCCD:</b> rõ nét, đặt trên mặt phẳng trơn, không lóa, không mất góc. <b>Ảnh khuôn mặt:</b> chụp chính diện, không đeo kính, không đội mũ, phía sau không có người khác.",
     "Chụp lỗi quá nhiều lần sẽ bị tạm dừng vài giờ. Nếu ảnh rõ mà ngân hàng vẫn từ chối, hồ sơ phải chờ 30 ngày mới đăng ký lại.",
     "<b>Thông tin khác với CCCD:</b> chỉ được sửa 1 lần. Nếu được yêu cầu cập nhật tại quầy, hãy ra chi nhánh VPBank cập nhật, chờ ít nhất 30 phút rồi bấm \"Đã cập nhật thông tin tại quầy\".",
     "<b>Cuộc gọi video:</b> chuẩn bị sẵn CCCD, mạng ổn định, nơi yên tĩnh; tự trả lời câu hỏi, không để người khác nhắc.",
     "<b>Lỗi camera:</b> vào Cài đặt điện thoại, cho phép trình duyệt truy cập Camera. Màn hình chụp bị đen thì tải lại trang.",
     "<b>Đăng ký dở dang:</b> có thể vào lại tại cards.vpbank.com.vn/re-enter để tiếp tục từ bước đang dừng.",
     "<b>Kích hoạt thẻ trên VPBank NEO:</b> Trang chủ → Thẻ → chọn thẻ cần kích hoạt → nhập 4 số cuối thẻ → xác thực khuôn mặt → nhập OTP. Hoặc ra quầy VPBank gần nhất để được hỗ trợ."]
   }},
  /* ---- FE CREDIT: Tiền mặt linh hoạt qua app FE Online 2.0 (AccessTrade) — theo tài liệu "Hướng dẫn chạy chiến dịch FE CREDIT APP 2.0" ---- */
  {id:"fecredit",name:"FE CREDIT – Vay qua app FE Online 2.0",cc:"VN",from:"VN",pin:true,
   logo:"https://www.google.com/s2/favicons?sz=128&domain=fecredit.com.vn",
   epc:0,link:"https://shorten.asia/bPaUdHpk",
   tags:["Tiền mặt linh hoạt","Đăng ký 100% online","Nhận tiền qua UBank"],
   guide:{
    info:[["Sản phẩm","Tiền mặt linh hoạt (FlexiMoney)"],["Ứng dụng","FE Online 2.0"],["Nhận tiền","Tài khoản UBank hoặc điểm chi hộ"],["Hình thức","Đăng ký & ký hợp đồng online"]],
    req:["CCCD gắn chip còn hạn","Đủ tuổi theo quy định của FE CREDIT","Số điện thoại chính chủ","Điện thoại có camera (nên có NFC để đọc chip CCCD)","Thông tin công việc, thu nhập và người tham chiếu"],
    steps:[
     ["Điền thông tin trên trang đăng ký","Bấm \"Đăng ký tại FE CREDIT\", điền họ tên, email, số điện thoại, số CCCD, ngày sinh rồi gửi."],
     ["Tải app FE Online 2.0","Sau khi đăng ký thành công, bấm nút \"Mở ứng dụng\" trên màn hình để tải app FE Online 2.0. Nên tải qua nút này, không tự tìm trên kho ứng dụng."],
     ["Cấp quyền cho app","Cho phép app dùng Camera, Vị trí (bắt buộc khi ký hợp đồng và nhận tiền), Thông báo và Micro. Tắt chế độ tiết kiệm pin."],
     ["Tạo tài khoản","Chọn \"Khám phá sản phẩm\" → \"Tiền mặt linh hoạt\" → \"Đăng ký\". Nhập số điện thoại, số CCCD, tích đồng ý điều khoản và nhập mã OTP."],
     ["Định danh điện tử","Chụp mặt trước CCCD, quét mã QR, chụp mặt sau rồi xác thực khuôn mặt. Cập nhật nghề nghiệp, chức vụ và địa chỉ, sau đó tạo mật khẩu."],
     ["Bắt đầu hồ sơ vay","Đăng nhập, chọn \"Khoản trả góp\" → \"Bắt đầu\". Xác nhận đồng ý xử lý dữ liệu cá nhân (bắt buộc chọn mục đích 1)."],
     ["Chọn số tiền & kỳ hạn","Kiểm tra lại CCCD, chọn \"Số tiền yêu cầu\" và \"Kỳ hạn trả góp\". Để trống ô mã giới thiệu."],
     ["Xác thực bổ sung (nếu có)","Nếu app yêu cầu: chụp khuôn mặt, CCCD hoặc áp CCCD gắn chip vào điện thoại (NFC) theo hướng dẫn."],
     ["Khai thông tin hồ sơ","Mục đích vay, nghề nghiệp, thu nhập và chi tiêu hằng tháng, thông tin công ty, địa chỉ hiện tại, học vấn, hôn nhân và người tham chiếu. Bấm gửi hồ sơ."],
     ["Mở tài khoản UBank","Đọc điều khoản, chọn \"Ký hợp đồng\" và nhập OTP để mở tài khoản thanh toán UBank nhận tiền."],
     ["Ký hợp đồng điện tử","Vào \"Khoản trả góp\" → \"Ký hợp đồng\", xác thực khuôn mặt, kiểm tra thông tin và nhập OTP."],
     ["Chọn ưu đãi khi được duyệt","Khi có thông báo phê duyệt: \"Khoản trả góp\" → \"Chọn ưu đãi\", xác thực khuôn mặt, chọn phương án phù hợp và bấm \"Xác nhận\"."],
     ["Nhận tiền","Chọn nhận tiền qua tài khoản UBank hoặc tại điểm chi hộ, xác nhận bằng OTP."]],
    notesTitle:"Lưu ý khi đăng ký",
    notes:[
     "<b>Hồ sơ không đạt nếu:</b> chưa đủ tuổi, CCCD hết hạn, hoặc ảnh CCCD bị mờ, lóa, mất góc. Hãy chụp đủ 4 góc, rõ nét, không lóa sáng.",
     "<b>Đã có tài khoản FE Online:</b> chọn \"Đăng nhập\" thay vì đăng ký mới.",
     "<b>Nhận tiền tại điểm chi hộ:</b> mang CCCD và mã bảo mật. Trong app chọn \"Nhận mã giao dịch\" rồi đọc mã cho giao dịch viên.",
     "<b>Có sẵn thẻ tín dụng FE CREDIT:</b> nếu chọn phương án làm thay đổi hạn mức thẻ, hạn mức mới áp dụng sau 1–2 ngày làm việc và không thể khôi phục hạn mức cũ.",
     "<b>Chuyển tiền từ UBank sang ngân hàng khác:</b> trong app chọn mục \"Ubank\" → \"Chuyển khoản\", nhập thông tin người nhận và xác nhận bằng Smart OTP."]
   }},
  /* ---- TNEX Finance (thuộc MSB): vay tiêu dùng online (AccessTrade) ---- */
  {id:"tnex",name:"TNEX – Vay online chỉ cần CCCD",cc:"VN",from:"VN",pin:true,
   logo:"tnex",
   epc:0,link:"https://shorten.asia/Ge99zzNB",
   tags:["Đến 30 triệu","Tối đa 15 tháng","Không cần chứng minh thu nhập"],
   guide:{
    info:[["Hạn mức tiền mặt","Đến 30 triệu đồng"],["Kỳ hạn","Tối đa 15 tháng"],["Lãi suất","24,4% – 32,5%/năm"],["Duyệt & giải ngân","Khoảng 30 phút"]],
    req:["CCCD gắn chip","Độ tuổi phù hợp: 18 – 50","Số điện thoại chính chủ","Không cần chứng minh thu nhập","Thông tin người liên hệ"],
    steps:[
     ["Điền thông tin đăng ký","Bấm \"Đăng ký tại TNEX\", nhập họ tên, số điện thoại và số tiền cần vay rồi gửi thông tin."],
     ["Chọn số tiền & thời gian vay","Chọn số tiền và kỳ hạn mong muốn, xem số tiền trả hằng tháng dự kiến."],
     ["Nhập thông tin cá nhân","Cung cấp số điện thoại, email, địa chỉ, nghề nghiệp và nhu cầu vay."],
     ["Thông tin người liên hệ","Nhập người liên hệ. Theo TNEX, người liên hệ được bảo mật và chỉ được liên hệ khi thật sự cần theo quy định của ngân hàng."],
     ["Định danh eKYC","Chụp mặt trước, mặt sau CCCD gắn chip và chụp chân dung khuôn mặt."],
     ["Xác nhận thông tin","Kiểm tra lại toàn bộ thông tin đăng ký khoản vay và xác nhận."],
     ["Duyệt & nhận tiền trên app TNEX","Tải app TNEX trên App Store hoặc CH Play. Khi được duyệt, khoản vay được giải ngân trên app."]],
    notesTitle:"Lưu ý về khoản vay",
    notes:[
     "<b>Lãi suất 24,4% – 32,5%/năm tính trên dư nợ gốc ban đầu</b>, mức cụ thể tùy xếp hạng tín dụng. Vì lãi tính trên gốc ban đầu nên chi phí thực tế cao hơn cách tính trên dư nợ giảm dần — hãy xem kỹ tổng số tiền phải trả trong hợp đồng.",
     "<b>Trả góp hằng tháng</b> gồm cả gốc và lãi.",
     "<b>Ưu đãi thêm trên app TNEX:</b> có cơ hội nhận hạn mức mua trước trả sau đến 20 triệu đồng, miễn lãi tối đa 35 ngày (theo chương trình của TNEX).",
     "<b>Tài khoản TNEX</b> cho phép rút tiền, chuyển khoản 24/7, miễn phí toàn quốc.",
     "TNEX Finance thuộc Ngân hàng TMCP Hàng Hải Việt Nam (MSB)."]
   }},
  /* ---- MAX by VIB: app vay & thẻ của Ngân hàng Quốc tế VIB (AccessTrade "AppMax Thẻ Vay VIB") ---- */
  {id:"maxvib",name:"MAX by VIB – Vay & mở thẻ online",cc:"VN",from:"VN",pin:true,
   logo:"maxvib",
   epc:0,link:"https://shorten.asia/W9E34whY",
   tags:["Vay nhanh đến 30 triệu","Giải ngân 3 phút","Lãi từ 0,92%/tháng"],
   guide:{
    info:[["Vay nhanh","Đến 30 triệu, giải ngân trong 3 phút"],["Kỳ hạn vay nhanh","Trả góp đến 36 tháng"],["Vay tiền mặt","Đến 1 tỷ đồng, lãi từ 0,92%/tháng"],["MAX Card","Mở thẻ tín dụng online trong 10 phút"]],
    req:["CCCD gắn chip","Số điện thoại chính chủ","Điện thoại thông minh để cài app MAX by VIB","Đáp ứng điều kiện xét duyệt của VIB"],
    steps:[
     ["Mở link & tải app","Bấm \"Đăng ký tại MAX by VIB\" và tải ứng dụng MAX by VIB (App Store / CH Play) từ trang này."],
     ["Đăng ký tài khoản","Mở app, nhập số điện thoại chính chủ và mã OTP để tạo tài khoản."],
     ["Định danh điện tử","Chụp CCCD gắn chip và xác thực khuôn mặt theo hướng dẫn trên app."],
     ["Chọn sản phẩm","Chọn Vay nhanh, Vay tiền mặt hoặc mở MAX Card tùy nhu cầu."],
     ["Khai thông tin & chọn khoản vay","Nhập thông tin cá nhân, công việc, chọn số tiền và kỳ hạn rồi gửi hồ sơ."],
     ["Nhận kết quả & ký hợp đồng","Xem kết quả xét duyệt, đọc kỹ lãi suất, phí, lịch trả nợ rồi ký hợp đồng điện tử."],
     ["Nhận tiền","Khoản vay được giải ngân sau khi hoàn tất ký hợp đồng."]],
    notesTitle:"Lưu ý",
    notes:[
     "<b>\"Lãi suất từ 0,92%/tháng\"</b> là mức thấp nhất. Lãi suất thực tế tùy hồ sơ và sản phẩm bạn chọn — hãy xem kỹ trên hợp đồng.",
     "<b>MAX Card</b> là thẻ tín dụng chọn hội viên, hoàn 10% cho mọi lĩnh vực chi tiêu (theo chương trình của VIB).",
     "<b>Ưu đãi 360:</b> hàng ngàn voucher ẩm thực, mua sắm, làm đẹp ngay trên app.",
     "MAX by VIB là ứng dụng chính thức của Ngân hàng TMCP Quốc tế Việt Nam (VIB)."]
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
