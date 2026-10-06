export interface ChatbotResponse {
  id: number;
  question: string;
  keywords: string[];
  answer: string;
}

export const chatbotResponses: ChatbotResponse[] = [
  /* =========================================================
     GREETINGS
  ========================================================= */

  {
    id: 1,
    question: "Hi / Hello",
    keywords: ["hi", "hello", "hey", "hii", "hai"],
    answer:
      "Hello! 👋 Welcome to CoinStep. How can I assist you today?",
  },

  {
    id: 2,
    question: "Good morning",
    keywords: ["good morning", "morning", "good mrng", "gm"],
    answer:
      "Good morning! 👋 Welcome to CoinStep. How can I assist you today?",
  },

  {
    id: 3,
    question: "Good afternoon",
    keywords: ["good afternoon", "afternoon", "good afternon"],
    answer:
      "Good afternoon! 👋 Welcome to CoinStep. How can I assist you today?",
  },

  {
    id: 4,
    question: "Good evening",
    keywords: ["good evening", "evening", "good eve"],
    answer:
      "Good evening! 👋 Welcome to CoinStep. How can I assist you today?",
  },

  {
    id: 5,
    question: "Good night",
    keywords: ["good night", "night"],
    answer:
      "Good night! 👋 Thank you for visiting CoinStep. Feel free to return whenever you need assistance.",
  },

  {
    id: 6,
    question: "Thank you",
    keywords: [
      "thanks",
      "thank you",
      "thank you so much",
      "thanks for helping",
    ],
    answer:
      "You're welcome! I'm glad I could help. Feel free to ask if you have any other CoinStep questions.",
  },

  {
    id: 7,
    question: "Goodbye",
    keywords: [
      "bye",
      "goodbye",
      "see you",
      "see you later",
      "talk to you later",
    ],
    answer:
      "Goodbye! 👋 Thank you for visiting CoinStep. We're here whenever you need assistance.",
  },

  /* =========================================================
     ABOUT COINSTEP
  ========================================================= */

  {
    id: 8,
    question: "What is CoinStep?",
    keywords: [
      "what is coinstep",
      "tell me about coinstep",
      "what does coinstep do",
      "what is coinstep used for",
      "explain coinstep",
    ],
    answer:
      "CoinStep is built with an advanced coin control wallet to help users manage their digital assets with better control and security.",
  },

  {
    id: 9,
    question: "Who can use CoinStep?",
    keywords: [
      "who can use coinstep",
      "who is coinstep for",
    ],
    answer:
      "CoinStep is designed for cryptocurrency users who want to manage their digital assets safely and securely.",
  },

  {
    id: 10,
    question: "Why should I use CoinStep?",
    keywords: [
      "why should i use coinstep",
      "why choose coinstep",
      "what are the advantages of coinstep",
      "what are the benefits of coinstep",
      "what makes coinstep useful",
    ],
    answer:
      "CoinStep is an advanced coin control wallet designed to give users greater control over their digital assets while providing a simple, secure and user-friendly Web3 experience.",
  },

  {
    id: 11,
    question: "What can I do with CoinStep?",
    keywords: [
      "what can i do with coinstep",
      "what can coinstep do",
      "what features can i use",
      "what can users do in coinstep",
    ],
    answer:
      "CoinStep helps users manage digital assets, send and receive crypto, view transaction details, connect with blockchain networks and access supported Web3 features.",
  },

  {
    id: 12,
    question: "What is an advanced coin control wallet?",
    keywords: [
      "what is advanced coin control wallet",
      "what does advanced coin control mean",
      "explain advanced coin control",
      "what is coin control",
      "advanced wallet meaning",
      "what is advanced wallet",
    ],
    answer:
      "An advanced coin control wallet gives users more control over how their crypto funds are managed, including transaction selection, fees, network settings and supported wallet operations.",
  },

  /* =========================================================
     GETTING STARTED
  ========================================================= */

  {
    id: 13,
    question: "How do I start using CoinStep?",
    keywords: [
      "how do i start using coinstep",
      "how can i get started with coinstep",
      "i am new to coinstep",
      "what should i do first",
      "how do i begin",
    ],
    answer:
      "Start by accessing the official CoinStep platform, set up or connect your supported wallet and follow the available wallet options.",
  },

  {
    id: 14,
    question: "How can I use CoinStep?",
    keywords: [
      "how can i use coinstep",
      "how does coinstep work",
      "how do i use coinstep",
      "show me how to use coinstep",
      "coinstep workflow",
    ],
    answer:
      "Open CoinStep, set up or connect your wallet, choose the feature you need and review the transaction details before confirming any blockchain action.",
  },

  {
    id: 15,
    question: "Can I use CoinStep as a desktop extension?",
    keywords: [
      "can i use coinstep desktop extension",
      "is coinstep available as extension",
      "can i use coinstep browser extension",
      "does coinstep have desktop extension",
      "can i install coinstep extension",
      "can i use coinstep in desktop",
      "is coinstep available on desktop",
    ],
    answer:
      "CoinStep can be accessed through supported desktop extension options based on the current CoinStep product version. Use only the official CoinStep extension or official access links.",
  },

  /* =========================================================
     SECURITY
  ========================================================= */

  {
    id: 16,
    question: "Is CoinStep secure?",
    keywords: [
      "is coinstep safe",
      "is coinstep secure",
      "can i trust coinstep",
      "is coinstep trustworthy",
      "how safe is coinstep",
    ],
    answer:
      "CoinStep is designed with wallet security in mind. Never share your private key, seed phrase or wallet password with anyone.",
  },

  {
    id: 17,
    question: "How can I secure my wallet?",
    keywords: [
      "how can i secure my wallet",
      "how do i keep my wallet safe",
      "how can i protect my wallet",
      "what should i do to secure my wallet",
      "how do i improve wallet security",
    ],
    answer:
      "Keep your private key and seed phrase secret, verify wallet addresses before transactions, avoid suspicious links and use only official CoinStep channels.",
  },

  {
    id: 18,
    question: "Should I share my private key?",
    keywords: [
      "should i share my private key",
      "can support ask for my private key",
      "does coinstep need my private key",
      "does coinstep store my private key",
      "can coinstep access my private key",
    ],
    answer:
      "No. Never share your private key with anyone. CoinStep support will not ask you to send your private key.",
  },

  {
    id: 19,
    question: "Should I share my seed phrase?",
    keywords: [
      "should i share my seed phrase",
      "does coinstep need my seed phrase",
      "does coinstep store my seed phrase",
      "can support ask for my seed phrase",
      "what if someone asks for my seed phrase",
    ],
    answer:
      "No. Never share your seed phrase with anyone. Anyone who gets your seed phrase may be able to access your wallet.",
  },

  {
    id: 20,
    question: "How can I avoid scams and phishing?",
    keywords: [
      "how can i avoid scams",
      "how do i avoid phishing",
      "how can i identify a fake coinstep website",
      "how do i know if a coinstep link is real",
      "how do i stay safe from fake links",
    ],
    answer:
      "Use only official CoinStep links, check website addresses carefully and never share your private key, seed phrase or wallet password.",
  },

  /* =========================================================
     WALLET
  ========================================================= */

  {
    id: 21,
    question: "What wallet do I need?",
    keywords: [
      "what wallet do i need",
      "do i need a wallet for coinstep",
      "do i need a crypto wallet",
      "which wallet should i use",
    ],
    answer:
      "The wallet you need depends on the CoinStep feature you are using. Use the supported wallet options available in CoinStep.",
  },

  {
    id: 22,
    question: "How do I connect my wallet with DeFi?",
    keywords: [
      "how to connect my wallet with defi",
      "how do i connect wallet to defi",
      "connect wallet with defi",
      "how to connect defi wallet",
    ],
    answer:
      "Use the wallet connection option in CoinStep, select the supported wallet and approve the connection request from your wallet.",
  },

  {
    id: 23,
    question: "Who controls my wallet?",
    keywords: [
      "who controls my wallet",
      "do i control my wallet",
      "does coinstep own my wallet",
      "does coinstep own my funds",
      "who owns the assets in my wallet",
    ],
    answer:
      "You control your wallet through your wallet credentials. Your private key and recovery details should always remain private.",
  },

  {
    id: 24,
    question: "Can CoinStep access my wallet funds?",
    keywords: [
      "does connecting wallet give access to funds",
      "can coinstep move my funds",
      "can coinstep control my wallet",
      "can coinstep access my wallet",
    ],
    answer:
      "Connecting your wallet does not require you to share your private key or seed phrase. Always review wallet permissions before approving a request.",
  },

  {
    id: 25,
    question: "Is my private key visible in the CoinStep wallet?",
    keywords: [
      "is private key visible",
      "can i see my private key",
      "where is my private key",
      "can i view private key in coinstep",
      "does coinstep show private key",
      "how to see private key",
    ],
    answer:
      "Yes. In our CoinStep wallet, users can view their private key through the supported wallet security settings. Never share your private key with anyone.",
  },

  /* =========================================================
     BACKUP & RECOVERY
  ========================================================= */

  {
    id: 26,
    question: "How do I back up my wallet?",
    keywords: [
      "how do i backup my wallet",
      "should i backup my wallet",
      "how can i backup my wallet safely",
      "where should i keep my recovery phrase",
      "how do i protect my wallet backup",
    ],
    answer:
      "Use the wallet backup option and keep your recovery information in a secure private location. Never share your recovery phrase with anyone.",
  },

  {
    id: 27,
    question: "What if I lose my phone or wallet access?",
    keywords: [
      "what if i lose access to my wallet",
      "what if i lose my phone",
      "how can i recover my wallet",
      "what happens if my device is lost",
      "can i recover my wallet on another device",
    ],
    answer:
      "Use the supported wallet recovery process with your recovery details. Never send your recovery phrase to another person or support agent.",
  },

  /* =========================================================
     SEND & RECEIVE
  ========================================================= */

  {
    id: 28,
    question: "How do I send crypto?",
    keywords: [
      "how do i send crypto",
      "how can i send coins",
      "how do i transfer crypto",
      "how do i send crypto using coinstep",
    ],
    answer:
      "Select the asset, enter or scan the receiver's wallet address, choose the correct network, enter the amount and confirm the transaction.",
  },

  {
    id: 29,
    question: "How do I receive crypto?",
    keywords: [
      "how do i receive crypto",
      "how can i receive coins",
      "how do i receive tokens",
      "how can someone send crypto to me",
    ],
    answer:
      "Select the receive option, choose the asset and network, then share your public wallet address or QR code with the sender.",
  },

  {
    id: 30,
    question: "What should I check before sending crypto?",
    keywords: [
      "what should i check before sending crypto",
      "how do i avoid sending crypto wrong",
      "what should i verify before transaction",
      "how to send crypto safely",
    ],
    answer:
      "Check the receiver address, blockchain network, token, amount and network fee before confirming the transaction.",
  },

  /* =========================================================
     TRANSACTIONS
  ========================================================= */

  {
    id: 31,
    question: "Why is my transaction pending?",
    keywords: [
      "why is my transaction pending",
      "transaction is pending",
      "my crypto is pending",
      "why is transfer taking long",
    ],
    answer:
      "A transaction may stay pending because of network congestion, network fees or blockchain conditions. You can check the transaction using its transaction hash.",
  },

  {
    id: 32,
    question: "What is a transaction hash?",
    keywords: [
      "what is transaction hash",
      "where is my transaction hash",
      "how do i track my transaction",
      "how can i check transaction status",
      "how do i verify transaction",
    ],
    answer:
      "A transaction hash is a unique ID for a blockchain transaction. You can use it to check the transaction status on a blockchain explorer.",
  },

  {
    id: 33,
    question: "Can I cancel or reverse a transaction?",
    keywords: [
      "can i cancel transaction",
      "can i reverse transaction",
      "can coinstep reverse transaction",
      "can crypto transfer be reversed",
    ],
    answer:
      "Confirmed blockchain transactions are generally irreversible. Always check the transaction details before confirming.",
  },

  {
    id: 34,
    question: "How many confirmations are needed?",
    keywords: [
      "how many confirmations are needed",
      "how many confirmations does a transaction need",
      "how many block confirmations are required",
      "is 12 confirmations required",
      "is 11 confirmations enough",
    ],
    answer:
      "CoinStep requires 12 block confirmations before the transaction is treated as fully confirmed. At 11 confirmations, the transaction is still not fully confirmed.",
  },

  /* =========================================================
     BLOCKCHAIN EXPLORER
  ========================================================= */

  {
    id: 35,
    question: "What is a blockchain explorer?",
    keywords: [
      "what is blockchain explorer",
      "what is a block explorer",
      "how can i check blockchain transaction",
      "where can i check my transaction",
      "how to use blockchain explorer",
    ],
    answer:
      "A blockchain explorer allows you to check transaction details, wallet addresses, block confirmations and transaction status using blockchain data.",
  },

  /* =========================================================
     FEES
  ========================================================= */

  {
    id: 36,
    question: "What is a gas fee?",
    keywords: [
      "why do i pay gas fee",
      "what is gas fee",
      "why is gas required",
      "why do transactions have network fees",
    ],
    answer:
      "Gas or network fees are paid to the blockchain network for processing and validating transactions.",
  },

  {
    id: 37,
    question: "Why is the gas fee high?",
    keywords: [
      "why is gas fee high",
      "why are network fees high",
      "why is transaction fee expensive",
      "why did fee increase",
    ],
    answer:
      "Network fees can increase when blockchain activity is high. Fees may change depending on the network and current demand.",
  },

  /* =========================================================
     ASSETS & NETWORKS
  ========================================================= */

  {
    id: 38,
    question: "Which coins does CoinStep support?",
    keywords: [
      "which coins does coinstep support",
      "what cryptocurrencies are supported",
      "which tokens can i use in coinstep",
      "what assets does coinstep support",
      "does coinstep support all coins",
    ],
    answer:
      "Check the CoinStep platform for the current list of supported coins and tokens.",
  },

  {
    id: 39,
    question: "Is CoinStep a multichain wallet?",
    keywords: [
      "is coinstep a multichain wallet",
      "does coinstep support multiple chains",
      "does coinstep support multiple blockchains",
      "is coinstep multichain",
      "which chain does coinstep prefer",
    ],
    answer:
      "Yes. CoinStep is designed as a multichain wallet, with Bitcoin as the first preference while supporting additional blockchain networks.",
  },

  {
    id: 40,
    question: "Which blockchain is the first preference in CoinStep?",
    keywords: [
      "which blockchain is first preference",
      "what is coinstep first preference",
      "is bitcoin first preference",
      "does coinstep prefer bitcoin",
      "which coin is primary in coinstep",
    ],
    answer:
      "Bitcoin is the first preference in CoinStep, while other supported blockchain networks are also available based on CoinStep wallet support.",
  },

  {
    id: 41,
    question: "Which networks does CoinStep support?",
    keywords: [
      "which networks does coinstep support",
      "which blockchain does coinstep use",
      "does coinstep support ethereum",
      "what blockchain networks are available",
    ],
    answer:
      "CoinStep supports multiple blockchain networks based on the current wallet version. Check the available network options inside CoinStep.",
  },

  {
    id: 42,
    question: "Can I add a custom token?",
    keywords: [
      "can i add a custom token",
      "how do i add a token to coinstep",
      "can i manually add a coin",
      "does coinstep support custom tokens",
    ],
    answer:
      "Custom tokens can be added if the feature is supported. Always use the correct and verified token contract address.",
  },

  /* =========================================================
     SWAP
  ========================================================= */

  {
    id: 43,
    question: "Can I swap cryptocurrencies in CoinStep?",
    keywords: [
      "can i swap",
      "can i swap crypto",
      "does coinstep support swap",
      "can i swap coins in coinstep",
      "can i exchange tokens",
      "can i swap one coin to another",
    ],
    answer:
      "If the swap feature is available in CoinStep, you can select the assets you want to swap, review the transaction details and confirm the swap.",
  },

  /* =========================================================
     ICO
  ========================================================= */

  {
    id: 44,
    question: "Does CoinStep offer ICO services?",
    keywords: [
      "does coinstep offer ico",
      "does coinstep support ico",
      "is ico available in coinstep",
      "can i buy ico in coinstep",
      "initial coin offering",
      "does coinstep provide initial coin offering",
    ],
    answer:
      "CoinStep does not currently provide ICO services unless an Initial Coin Offering is officially announced by CoinStep  Telegram channel.",
  },

  /* =========================================================
     NODE / SERVER SETTINGS
  ========================================================= */

  {
    id: 45,
    question: "Can I change the node or server settings?",
    keywords: [
      "can i change server settings",
      "can i change node settings",
      "can i connect node 1 to node 2",
      "can i switch node",
      "can i change rpc",
      "can i change rpc server",
      "can i connect another node",
    ],
    answer:
      "Yes. CoinStep allows you to change the node or RPC server settings and connect to another supported blockchain node.",
  },

  /* =========================================================
     PROBLEMS & SUPPORT
  ========================================================= */

  {
    id: 46,
    question: "Why is my wallet not connecting?",
    keywords: [
      "my wallet is not connecting",
      "wallet not connecting",
      "why cant i connect my wallet",
      "wallet connection failed",
    ],
    answer:
      "Make sure your wallet is unlocked, connected to the correct network and supported by CoinStep. Refresh and try connecting again.",
  },

  {
    id: 47,
    question: "Why is CoinStep not working?",
    keywords: [
      "coinstep is not opening",
      "coinstep not working",
      "page is not working",
      "page is loading slowly",
      "i am getting an error",
    ],
    answer:
      "Check your internet connection, refresh CoinStep and try again. If the problem continues, contact CoinStep Support.",
  },

  {
    id: 48,
    question: "How do I contact CoinStep Support?",
    keywords: [
      "how do i contact support",
      "how do i contact coinstep",
      "where is coinstep support",
      "i need help",
      "can i speak to support",
      "how do i report an issue",
    ],
    answer:
      "Use the official CoinStep Support section or official CoinStep support channels for technical or account-related assistance.",
  },

  {
    id: 49,
    question: "What should I do if my wallet is hacked?",
    keywords: [
      "what should i do if wallet is hacked",
      "my wallet may be compromised",
      "someone accessed my wallet",
      "what should i do if i see suspicious activity",
      "how do i report suspicious activity",
    ],
    answer:
      "Stop approving transactions, avoid suspicious links and contact CoinStep Support. Never share your private key or seed phrase.",
  },

  /* =========================================================
     UPDATES
  ========================================================= */

  {
    id: 50,
    question: "Where can I get CoinStep updates?",
    keywords: [
      "where can i get coinstep updates",
      "how can i know about coinstep updates",
      "where can i see coinstep announcements",
      "how do i know about new features",
    ],
    answer:
      "Follow official CoinStep communication channels for product updates, announcements and new features.",
  },

  {
    id: 51,
    question: "How do I update CoinStep?",
    keywords: [
      "how do i update coinstep",
      "where can i get latest coinstep version",
      "how do i know coinstep is updated",
      "where can i check coinstep version",
    ],
    answer:
      "Use only official CoinStep sources or supported extension update options to get the latest CoinStep version.",
  },
];