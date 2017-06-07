
var warningId = 'notification.thongbao';
 chrome.notifications.create(warningId, {
      iconUrl: chrome.runtime.getURL('images/icon-48.png'),
      title: 'Son nguyen',
      type: 'progress',
      message: 'Bạn vừa ấn vào đây',
      buttons: [{ title: 'xem thêm' }],
      isClickable: false,
      priority: 2,
    }, function() {});
	
 chrome.notifications.onClicked.addListener(function(warningId, byUser) {
        chrome.tabs.create({url: "https://www.google.com.vn/#q=dog"});
		//alert("xin chào");
    });
	
