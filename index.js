class TimeNoMoneyCrypto {
    constructor(name, cryptoActivity, timeSpent) {
      this.name = name;
      this.cryptoActivity = cryptoActivity || 'Observing Markets';
      this.timeSpent = timeSpent || 0;
      this.cryptoRewards = 0;
    }
  
    performCryptoActivity(hours) {
      this.timeSpent += hours;
      console.log(`${this.name} spent ${hours} hours on ${this.cryptoActivity}.`);
    }
  
    claimCryptoRewards(rewardAmount) {
      this.cryptoRewards += rewardAmount;
      console.log(`${this.name} claimed ${rewardAmount} crypto rewards.`);
    }
  
    displayCryptoStats() {
      console.log(`
        Time No Money Crypto Information:
        Name: ${this.name}
        Crypto Activity: ${this.cryptoActivity}
        Time Spent: ${this.timeSpent} hours
        Crypto Rewards: ${this.cryptoRewards} coins
      `);
    }
  }
  
  // Example usage
  const timeNoMoneyCryptoUser = new TimeNoMoneyCrypto('CryptoObserver', 'Market Analysis');
  
  timeNoMoneyCryptoUser.performCryptoActivity(10);
  timeNoMoneyCryptoUser.claimCryptoRewards(5);
  timeNoMoneyCryptoUser.displayCryptoStats();
  