class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }

  fallback = () => {
    const message = this.createChatBotMessage('Omlouvám sem, nerozuměl jsem Vaší otázce.');
    this.setChatbotMessage(message);
  };

  incubationTime = () => {
    const message = this.createChatBotMessage('Inkubační doba je 2 - 14 dní.');
    this.setChatbotMessage(message);
  };

  symptoms = () => {
    const message = this.createChatBotMessage('Hlavními příznaky jsou rýma, kašel, ztráta chutě');
    this.setChatbotMessage(message);
  };

  vaccines = () => {
    const message = this.createChatBotMessage(
      'Vakcíny schválené v ČR jsou: AstraZeneca, Johnson & Johnson, Moderna a Pfizer.'
    );
    this.setChatbotMessage(message);
  };

  tests = () => {
    const message = this.createChatBotMessage('Nárok na bezplatné testování máte každé 3 dny.');
    this.setChatbotMessage(message);
  };

  progress = () => {
    const message = this.createChatBotMessage(
      '80% procet nakažených zažívá lehký průběh, 14% těžký průběh a 6% kritický průběh.'
    );
    this.setChatbotMessage(message);
  };

  setChatbotMessage = (message) => {
    this.setState((state) => ({ ...state, messages: [...state.messages, message] }));
  };
}

export default ActionProvider;
