export interface ChatbotResponse {
  keywords: string[];
  answer: string;
}

export const chatbotResponses: ChatbotResponse[] = [
  /* =========================================================
     GREETINGS
  ========================================================= */

  {
    keywords: ["hi", "hello", "hey", "hii", "hai"],
    answer:
      "Hello! 👋 Welcome to CoinStep. How can I assist you today?",
  },

  {
    keywords: ["good morning", "morning", "good mrng", "gm"],
    answer:
      "Good morning! 👋 Welcome to CoinStep. How can I assist you today?",
  },

  {
    keywords: ["good afternoon", "afternoon", "good afternon"],
    answer:
      "Good afternoon! 👋 Welcome to CoinStep. How can I assist you today?",
  },

  {
    keywords: ["good evening", "evening", "good eve"],
    answer:
      "Good evening! 👋 Welcome to CoinStep. How can I assist you today?",
  },

  {
    keywords: ["good night", "night"],
    answer:
      "Good night! 👋 Thank you for visiting CoinStep. Feel free to return whenever you need assistance.",
  },

  {
    keywords: ["thanks", "thank you", "thank you so much", "thanks for helping"],
    answer:
      "You're welcome! I'm glad I could help. Feel free to ask if you have any other CoinStep questions.",
  },

  {
    keywords: ["bye", "goodbye", "see you", "see you later", "talk to you later"],
    answer:
      "Goodbye! 👋 Thank you for visiting CoinStep. We're here whenever you need assistance.",
  },

  /* =========================================================
     ABOUT COINSTEP
  ========================================================= */

  {
    keywords: [
      "what is CoinStep",
      "tell me about CoinStep",
      "what does CoinStep do",
      "what is CoinStep used for",
      "explain CoinStep",
    ],
    answer:
      "CoinStep is designed to provide a simpler way to explore Web3, manage blockchain interactions and access wallet-related features from one platform.",
  },

  {
    keywords: [
      "who can use CoinStep",
      "who is CoinStep for",
      "is CoinStep for beginners",
      "can beginners use CoinStep",
      "is CoinStep easy for beginners",
    ],
    answer:
      "CoinStep is designed for people exploring Web3, including beginners who want a simpler way to understand and use blockchain-related features.",
  },

  {
    keywords: [
      "why should i use CoinStep",
      "why choose CoinStep",
      "what are the advantages of CoinStep",
      "what are the benefits of CoinStep",
      "what makes CoinStep useful",
    ],
    answer:
      " CoinStep is an advanced coin control wallet designed to give users greater control over their digital assets while providing a simple, secure and user-friendly Web3 experience.",
  },

  {
    keywords: [
      "what can i do with CoinStep",
      "what can CoinStep do",
      "what features can i use",
      "what can users do in CoinStep",
    ],
    answer:
      "CoinStep is intended to help users access wallet-related features, manage digital assets, interact with blockchain services and explore Web3 experiences through a simpler interface.",
  },

  /* =========================================================
     GETTING STARTED
  ========================================================= */

  {
    keywords: [
      "how do i start using CoinStep",
      "how can i get started with CoinStep",
      "i am new to CoinStep",
      "what should i do first",
      "how do i begin",
    ],
    answer:
      "Start by accessing the official CoinStep platform, review the available features, understand basic wallet safety and then follow the supported setup or wallet connection process.",
  },

  {
    keywords: [
      "how can i use CoinStep",
      "how does CoinStep work",
      "how do i use CoinStep",
      "show me how to use CoinStep",
      "CoinStep workflow",
    ],
    answer:
      "Using CoinStep generally involves accessing the platform, setting up or connecting a supported wallet, choosing the feature you need and carefully reviewing transaction details before confirming any blockchain action.",
  },

  {
    keywords: [
      "where can i access CoinStep",
      "where can i use CoinStep",
      "can i use CoinStep in browser",
      "is CoinStep a website",
    ],
    answer:
      "Use only the official CoinStep website or officially provided access links. Avoid unknown links or unofficial copies of the platform.",
  },

  /* =========================================================
     SECURITY
  ========================================================= */

  {
    keywords: [
      "is CoinStep safe",
      "is CoinStep secure",
      "can i trust CoinStep",
      "is CoinStep trustworthy",
      "how safe is CoinStep",
    ],
    answer:
      "CoinStep is designed for Web3 interactions, but users should always follow standard wallet security practices. Never share your private key, seed phrase or wallet password with anyone.",
  },

  {
    keywords: [
      "how can i secure my wallet",
      "how do i keep my wallet safe",
      "how can i protect my wallet",
      "what should i do to secure my wallet",
      "how do i improve wallet security",
    ],
    answer:
      "Keep your private key and seed phrase secret, use strong device security, verify addresses before transactions, avoid suspicious links, use only official CoinStep channels and carefully review permissions before approving wallet actions.",
  },

  {
    keywords: [
      "should i share my private key",
      "can support ask for my private key",
      "does CoinStep need my private key",
      "does CoinStep store my private key",
      "can CoinStep access my private key",
    ],
    answer:
      "Never share your private key with anyone. CoinStep Assistant or support should never ask you to send your private key.",
  },

  {
    keywords: [
      "should i share my seed phrase",
      "does CoinStep need my seed phrase",
      "does CoinStep store my seed phrase",
      "can support ask for my seed phrase",
      "what if someone asks for my seed phrase",
    ],
    answer:
      "Never share your seed phrase with anyone. Anyone who obtains it may be able to access your wallet and digital assets.",
  },

  {
    keywords: [
      "how can i avoid scams",
      "how do i avoid phishing",
      "how can i identify a fake CoinStep website",
      "how do i know if a CoinStep link is real",
      "how do i stay safe from fake links",
    ],
    answer:
      "Use only official CoinStep links, verify website addresses carefully, avoid unknown links and never share your private key, seed phrase or wallet password.",
  },

  /* =========================================================
     WALLET
  ========================================================= */

  {
    keywords: [
      "what wallet do i need",
      "do i need a wallet for CoinStep",
      "do i need a crypto wallet",
      "which wallet should i use",
    ],
    answer:
      "The wallet you need depends on the CoinStep feature you are using. Always follow the supported wallet options shown on the official platform.",
  },

  {
    keywords: [
      "how do i connect my wallet",
      "how to connect wallet",
      "connect wallet to CoinStep",
      "can i connect metamask",
      "can i connect trust wallet",
    ],
    answer:
      "Use the wallet connection option provided on the official CoinStep platform. Choose a supported wallet, review the connection request carefully and approve it only from your wallet application.",
  },

  {
    keywords: [
      "who controls my wallet",
      "do i control my wallet",
      "does CoinStep own my wallet",
      "does CoinStep own my funds",
      "who owns the assets in my wallet",
    ],
    answer:
      "Wallet control depends on the wallet setup being used. Your private key and recovery credentials should remain private and should never be shared with anyone.",
  },

  {
    keywords: [
      "does connecting wallet give access to funds",
      "can CoinStep move my funds",
      "can CoinStep control my wallet",
      "can CoinStep access my wallet",
    ],
    answer:
      "Connecting a wallet should not require sharing your private key or seed phrase. Always review wallet permissions carefully before approving any request.",
  },

  /* =========================================================
     BACKUP & RECOVERY
  ========================================================= */

  {
    keywords: [
      "how do i backup my wallet",
      "should i backup my wallet",
      "how can i backup my wallet safely",
      "where should i keep my recovery phrase",
      "how do i protect my wallet backup",
    ],
    answer:
      "Follow the wallet's official backup process and keep recovery information in a secure private location. Never share your recovery phrase or store it somewhere others can easily access.",
  },

  {
    keywords: [
      "what if i lose access to my wallet",
      "what if i lose my phone",
      "how can i recover my wallet",
      "what happens if my device is lost",
      "can i recover my wallet on another device",
    ],
    answer:
      "Wallet recovery depends on the recovery method supported by your wallet. Use only the wallet's official recovery process and never send your recovery phrase to another person or support agent.",
  },

  /* =========================================================
     SEND & RECEIVE
  ========================================================= */

  {
    keywords: [
      "how do i send crypto",
      "how can i send coins",
      "how do i transfer crypto",
      "how do i send crypto using CoinStep",
    ],
    answer:
      "To send crypto, select the asset, enter or scan the recipient's wallet address, confirm the correct blockchain network, review the amount and fees, then approve the transaction.",
  },

  {
    keywords: [
      "how do i receive crypto",
      "how can i receive coins",
      "how do i receive tokens",
      "how can someone send crypto to me",
    ],
    answer:
      "To receive crypto, use your wallet's receive option, select the correct asset and network, then share your public wallet address or QR code with the sender.",
  },

  {
    keywords: [
      "what should i check before sending crypto",
      "how do i avoid sending crypto wrong",
      "what should i verify before transaction",
      "how to send crypto safely",
    ],
    answer:
      "Before sending crypto, verify the recipient address, blockchain network, token type, amount and network fee. Blockchain transactions may not be reversible once confirmed.",
  },

  /* =========================================================
     TRANSACTIONS
  ========================================================= */

  {
    keywords: [
      "why is my transaction pending",
      "transaction is pending",
      "my crypto is pending",
      "why is transfer taking long",
    ],
    answer:
      "A transaction may remain pending because of network congestion, low network fees or wallet/network conditions. Check the transaction hash using the appropriate blockchain explorer.",
  },

  {
    keywords: [
      "why did my transaction fail",
      "transaction failed",
      "why was my transfer rejected",
      "my crypto transaction failed",
    ],
    answer:
      "Transactions can fail because of insufficient network fees, insufficient balance, network issues or smart contract errors. Review the transaction details before trying again.",
  },

  {
    keywords: [
      "what is transaction hash",
      "where is my transaction hash",
      "how do i track my transaction",
      "how can i check transaction status",
      "how do i verify transaction",
    ],
    answer:
      "A transaction hash is the unique identifier for a blockchain transaction. You can use it on the appropriate blockchain explorer to check the transaction status and confirmation details.",
  },

  {
    keywords: [
      "can i cancel transaction",
      "can i reverse transaction",
      "can CoinStep reverse transaction",
      "can crypto transfer be reversed",
    ],
    answer:
      "Confirmed blockchain transactions are generally irreversible. Some pending transactions may have limited options depending on the wallet and network, so always verify the details before confirming.",
  },

  {
    keywords: [
      "how many confirmations are needed",
      "how many confirmations does a transaction need",
      "how many block confirmations are required",
      "is 12 confirmations required",
      "is 11 confirmations enough",
    ],
    answer:
      "For the CoinStep flow currently documented, 12 block confirmations are required before a transaction is treated as fully confirmed. At 11 confirmations, it has received confirmations but has not yet reached that threshold.",
  },

  /* =========================================================
     FEES
  ========================================================= */

  {
    keywords: [
      "why do i pay gas fee",
      "what is gas fee",
      "why is gas required",
      "why do transactions have network fees",
    ],
    answer:
      "Gas or network fees are paid to the blockchain network for processing and validating transactions. These fees are generally determined by the network rather than by the wallet interface.",
  },

  {
    keywords: [
      "why is gas fee high",
      "why are network fees high",
      "why is transaction fee expensive",
      "why did fee increase",
    ],
    answer:
      "Network fees can increase when blockchain activity is high or when a transaction requires more computation. Fees can vary depending on the network and current demand.",
  },

  /* =========================================================
     ASSETS & NETWORKS
  ========================================================= */

  {
    keywords: [
      "which coins does CoinStep support",
      "what cryptocurrencies are supported",
      "which tokens can i use in CoinStep",
      "what assets does CoinStep support",
      "does CoinStep support all coins",
    ],
    answer:
      "A complete confirmed list of supported coins and tokens should be checked through official CoinStep product information and updates.",
  },

  {
    keywords: [
      "which networks does CoinStep support",
      "which blockchain does CoinStep use",
      "does CoinStep support ethereum",
      "what blockchain networks are available",
    ],
    answer:
      "Supported blockchain networks depend on the current CoinStep product version. Use the network options displayed on the official platform and confirm the network before making a transaction.",
  },

  {
    keywords: [
      "can i add a custom token",
      "how do i add a token to CoinStep",
      "can i manually add a coin",
      "does CoinStep support custom tokens",
    ],
    answer:
      "Custom-token support depends on the current CoinStep product features. Use only verified token contract information and follow the official CoinStep instructions if the feature is available.",
  },

  /* =========================================================
     PROBLEMS & SUPPORT
  ========================================================= */

  {
    keywords: [
      "my wallet is not connecting",
      "wallet not connecting",
      "why cant i connect my wallet",
      "wallet connection failed",
    ],
    answer:
      "Make sure your wallet is unlocked, connected to the correct network and supported by the platform. Refresh the page and reconnect if necessary. Never share your seed phrase while troubleshooting.",
  },

  {
    keywords: [
      "CoinStep is not opening",
      "CoinStep not working",
      "page is not working",
      "page is loading slowly",
      "i am getting an error",
    ],
    answer:
      "Check your internet connection, refresh the page and reopen the official CoinStep website. If the issue continues, contact CoinStep Support and share the error details without sharing private wallet credentials.",
  },

  {
    keywords: [
      "how do i contact support",
      "how do i contact CoinStep",
      "where is CoinStep support",
      "i need help",
      "can i speak to support",
      "how do i report an issue",
    ],
    answer:
      "For account-specific, technical or security-related assistance, please use the official CoinStep Support section or official company support channels.",
  },

  {
    keywords: [
      "what should i do if wallet is hacked",
      "my wallet may be compromised",
      "someone accessed my wallet",
      "what should i do if i see suspicious activity",
      "how do i report suspicious activity",
    ],
    answer:
      "If you suspect unauthorized wallet activity, stop approving new transactions, avoid suspicious links and contact official support. Never share your private key or seed phrase while requesting help.",
  },

  /* =========================================================
     UPDATES
  ========================================================= */

  {
    keywords: [
      "where can i get CoinStep updates",
      "how can i know about CoinStep updates",
      "where can i see CoinStep announcements",
      "how do i know about new features",
    ],
    answer:
      "CoinStep product updates, announcements and new feature information should be followed through official CoinStep communication channels.",
  },

  {
    keywords: [
      "how do i update CoinStep",
      "where can i get latest CoinStep version",
      "how do i know CoinStep is updated",
      "where can i check CoinStep version",
    ],
    answer:
      "Use only official CoinStep sources for product updates or new versions. Avoid downloading wallet-related software from unknown links.",
  },
];