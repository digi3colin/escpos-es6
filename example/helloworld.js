const iconv = require('iconv-lite');
const ipp = require('ipp');
const printer = ipp.Printer("http://localhost:631/printers/YOUR_PRINTER");


const {ESCPOSCommand, CommandPrint, CommandLineSpacing, CommandCharacter, CommandMechanismControl, CommandBitImage, CommandPrintPosition} = require('../ESCPOS');
const init = [0x1B, 0x40];
const text1 = iconv.encode("Hello world, 你好。\n", 'big5');
const center = CommandPrintPosition.selectJustification(ESCPOSCommand.JUSTIFICATION_CENTER);
const feed3 = CommandPrint.printAndFeedNLines(3);
const cut = CommandMechanismControl.selectCutModeAndCutPaperFeed(ESCPOSCommand.CUT_PARTIAL_FEED, 1);

const data = ESCPOSCommand.toBuffer([
  ...init,
  ...center,
  ...text1,
  ...feed3,
  ...cut
]);

printer.execute("Print-Job",
  {
    "operation-attributes-tag":{
      "requesting-user-name":"nap",
      "job-name":"testing"
    },
    "job-attributes-tag":{},
    data,
  }, function(err, res){
    console.log(err);
    console.log(res);
  });