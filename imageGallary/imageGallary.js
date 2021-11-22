let str = "afterBook.png,a.txt,autoError.png,calender.png,C-book.png,checkRam.png,constructor.png,constructors.png,cssError.png,csvError.png,csvError.xcf,encryptError.png,encryptPdf.png,externError.png,fpurgeError.png,git.png,gPage.png,h-bool.png,htmlError.png,linkerLoader.png,linuxBook.png,mypc0.png,mypc1.png,mypc.png,mySite1.png,mySite3.png,mySite.png,nodeError.png,objectFileDefination1.png,objectFileDefination.png,passSql.png,pdfError.png,prototype.png,register.png,registers.png,selScr.png,site.3gp,sk.png,su0.png,subProcess.png,su.png,undefError.png,undefinedReferance.png,undef.png"

let allImages = str.split(/,\s*/);
let imageCount = allImages.length - 1;
let imageIndex = 0;

let imgElem = document.getElementById('image');
let next = document.querySelector(".next");
let previous = document.querySelector(".previous");

next.addEventListener('click', () => {
	if (imageIndex > imageCount)
		imageIndex = 0;
	imgElem.src = "/home/linux/Pictures/"+allImages[imageIndex];
	imageIndex += 1;
})

previous.addEventListener('click', () => {
	if (imageIndex < 0)
		imageIndex = imageCount;
	imgElem.src = "/home/linux/Pictures/"+allImages[imageIndex];
	imageIndex -= 1;
})