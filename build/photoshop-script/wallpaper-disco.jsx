// // get a reference to the current (active) document and store it in a variable named "doc"
// doc = app.activeDocument;
//
// // change the color mode to RGB.  Important for resizing GIFs with indexed colors, to get better results
// doc.changeMode(ChangeMode.RGB);
//
// // these are our values for the END RESULT width and height (in pixels) of our image
// var fWidth = 320;
// var fHeight = 350;
//
// // do the resizing.  if height > width (portrait-mode) resize based on height.  otherwise, resize based on width
// if (doc.height > doc.width) {
//     doc.resizeImage(null,UnitValue(fHeight,"px"),null,ResampleMethod.BICUBIC);
// }
// else {
//     doc.resizeImage(UnitValue(fWidth,"px"),null,null,ResampleMethod.BICUBIC);
// }
//
// // Makes the default background white
// var white = new SolidColor();
// white.rgb.hexValue = "FFFFFF";
// app.backgroundColor = white;
//
// // Convert the canvas size as informed above for the END RESULT
// app.activeDocument.resizeCanvas(UnitValue(fWidth,"px"),UnitValue(fHeight,"px"));
//
// // our web export options
// var options = new ExportOptionsSaveForWeb();
// options.quality = 70;
// options.format = SaveDocumentType.JPEG;
// options.optimized = true;
//
// var newName = 'web-'+doc.name+'.jpg';
//
// doc.exportDocument(File(doc.path+'/'+newName),ExportType.SAVEFORWEB,options);

//COMMENTS ABOVE - MY STUFF HERE








// // get a reference to the current (active) document and store it in a variable named "doc"
// var doc = app.activeDocument;
// // change the color mode to RGB.  Important for resizing GIFs with indexed colors, to get better results
// doc.changeMode(ChangeMode.RGB);
//
// //get the name of the file
// var Name = doc.name.replace(/\.[^\.]+$/, '');
//
// //save for web options
//
// var options = new ExportOptionsSaveForWeb();
// options.format = SaveDocumentType.JPEG;
// options.quality = 70;
//
//
//
// doc.exportDocument(new File('bazzzz'), ExportType.SAVEFORWEB, options);






// //Save for web
// function SaveForWeb(FileNm) {
//   var options = new ExportOptionsSaveForWeb();
//   options.format = SaveDocumentType.PNG;   // Save Format for the file
//   doc.exportDocument(File(FileNm), ExportType.SAVEFORWEB, options);
// }
//
// // Sizes to save everything out at
// var iPhoneWidth = 1242;
// var iPhoneHeight = 2208;
// var saveFile = File(Name+"_1400x1400.jpg");
//
// doc.resizeCanvas (iPhoneWidth, iPhoneHeight);
//
//
//
// SaveForWeb(saveFile);











// Instagram: 1280x1280 @50%
// Dribbble: 1600x1200 @50%
// Pinterest: 1470x2900
// iPhone 6: 1242x2208
// Desktop: 2880x1800
// Android: 1080x1920