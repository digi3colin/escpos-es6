const {
  ESCPOS,
  CommandPrint,
  CommandLineSpacing,
  CommandCharacter,
  CommandPrintingPaper,
  CommandPrintPosition,
  CommandPaperSensor,
  CommandMechanismControl,
  CommandBitImage,
  CommandPanelButton,
  CommandStatus,
  CommandBarcode,
  Command2DCode,
  CommandMacro,
  CommandKanji,
  CommandMiscellaneous,
  ASCII
} = require('./ESCPOS');

module.exports = {
  ESCPOSCommand: ESCPOS,
  CommandPrint,
  CommandLineSpacing,
  CommandCharacter,
  CommandPrintingPaper,
  CommandPrintPosition,
  CommandPaperSensor,
  CommandMechanismControl,
  CommandBitImage,
  CommandPanelButton,
  CommandStatus,
  CommandBarcode,
  Command2DCode,
  CommandMacro,
  CommandKanji,
  CommandMiscellaneous,
  ASCII
};