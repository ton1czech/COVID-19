class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    const lowercase = message.toLowerCase();
    if (
      lowercase.includes('inkubační') ||
      lowercase.includes('inkubačni') ||
      lowercase.includes('inkubacní') ||
      lowercase.includes('inkubacni')
    ) {
      this.actionProvider.incubationTime();
    } else if (
      lowercase.includes('příznaky') ||
      lowercase.includes('přiznaky') ||
      lowercase.includes('príznaky') ||
      lowercase.includes('priznaky') ||
      lowercase.includes('příznak') ||
      lowercase.includes('přiznak') ||
      lowercase.includes('príznak') ||
      lowercase.includes('priznak')
    ) {
      this.actionProvider.symptoms();
    } else if (
      lowercase.includes('vakcína') ||
      lowercase.includes('vakcina') ||
      lowercase.includes('vakcín') ||
      lowercase.includes('vakcin') ||
      lowercase.includes('vakcíny') ||
      lowercase.includes('vakciny')
    ) {
      this.actionProvider.vaccines();
    } else if (
      lowercase.includes('testování') ||
      lowercase.includes('testovaní') ||
      lowercase.includes('testováni') ||
      lowercase.includes('testovani') ||
      lowercase.includes('testovat')
    ) {
      this.actionProvider.tests();
    } else if (
      lowercase.includes('průběh') ||
      lowercase.includes('pruběh') ||
      lowercase.includes('průbeh') ||
      lowercase.includes('prubeh')
    ) {
      this.actionProvider.progress();
    } else {
      this.actionProvider.fallback();
    }
  }
}

export default MessageParser;
