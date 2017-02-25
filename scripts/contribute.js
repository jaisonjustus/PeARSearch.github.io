var Contribute = {
  selectors:  {},

  loadSelectors: function () {
    this.selectors.$instructionSetHeader = document.querySelector('.InstructionSet__Header');
    this.selectors.$instructionSetContent = document.querySelector('.InstructionSet__Content');
    console.log(this.selectors);
  },

  loadEventBindings: function () {
    this.selectors.$instructionSetHeader
      .addEventListener('click', this.onInstructionHeaderClick.bind(this));
  },

  onInstructionHeaderClick: function (e) {
    console.log('onInstructionHeaderClick');
    var classList = this.selectors.$instructionSetContent.classList;
    if(classList.contains('hide'))  {
      classList.remove('hide');
    }else {
      classList.add('hide');
    }
  },

  init: function () {
    this.loadSelectors();
    this.loadEventBindings();
  }
};

window.onload = function () {
  Contribute.init();
};
