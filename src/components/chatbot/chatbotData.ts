export interface ChatbotResponse {
  keywords: string[];
  answer: string;
}

export const chatbotResponses: ChatbotResponse[] = [
  {
    keywords: ["hi", "hello", "hey"],
    answer:
      "Hello! 👋 Welcome to Coinstep. How can I help you today?",
  },

  {
    keywords: ["what is coinstep", "coinstep"],
    answer:
      "Coinstep is a Web3 platform designed to make blockchain experiences easier, simpler, and more accessible.",
  },

  {
    keywords: ["what is blockchain", "blockchain"],
    answer:
      "Blockchain is a secure digital system that stores transactions across many computers instead of one central server.",
  },

  {
    keywords: ["what is web3", "web3"],
    answer:
      "Web3 is the next generation of internet applications that use blockchain and decentralized technologies.",
  },

  {
    keywords: ["wallet", "crypto wallet"],
    answer:
      "A crypto wallet helps users manage digital assets and interact with blockchain applications.",
  },

  {
    keywords: ["ethereum", "eth"],
    answer:
      "Ethereum is a blockchain network that supports smart contracts and decentralized applications.",
  },

  {
    keywords: ["smart contract", "smart contracts"],
    answer:
      "A smart contract is a program stored on a blockchain that automatically runs when its conditions are met.",
  },

  {
    keywords: ["gas", "gas fee", "gas fees"],
    answer:
      "Gas fees are transaction fees paid to process actions on blockchain networks such as Ethereum.",
  },

  {
    keywords: ["transaction", "transactions"],
    answer:
      "A blockchain transaction is an action such as sending tokens, receiving assets, or interacting with a smart contract.",
  },

  {
    keywords: ["platform", "coinstep platform"],
    answer:
      "The Coinstep platform is designed to help users access Web3 and blockchain-related experiences in one place.",
  },

  {
    keywords: ["features", "coinstep features"],
    answer:
      "Coinstep focuses on providing simple and accessible Web3 features for users exploring blockchain technology.",
  },

  {
    keywords: ["build", "developer", "developers"],
    answer:
      "The Build section is intended for users and developers interested in creating blockchain and Web3 experiences.",
  },

  {
    keywords: ["support", "help"],
    answer:
      "For support, you can visit the Coinstep Support section where users can find help and guidance.",
  },

  {
    keywords: ["faq", "frequently asked questions"],
    answer:
      "The FAQ section contains common questions and answers about Coinstep and its Web3 platform.",
  },

  {
    keywords: ["about", "about coinstep"],
    answer:
      "The About section provides information about Coinstep, its purpose, and its focus on Web3 technology.",
  },

  {
    keywords: ["security", "safe", "secure"],
    answer:
      "Blockchain uses cryptography and decentralized systems to improve security. Users should still protect their wallet credentials and private keys.",
  },

  {
    keywords: ["private key", "private keys"],
    answer:
      "A private key is a secret key used to access and control blockchain assets. It should never be shared with anyone.",
  },

  {
    keywords: ["public key", "wallet address", "address"],
    answer:
      "A wallet address is a public identifier used to send and receive blockchain assets.",
  },

  {
    keywords: ["decentralized", "decentralization"],
    answer:
      "Decentralization means a system is not controlled by one central authority and is instead distributed across multiple participants.",
  },

  {
    keywords: ["dapp", "dapps", "decentralized application"],
    answer:
      "A DApp is a decentralized application that runs using blockchain technology and smart contracts.",
  },

  {
    keywords: ["bye", "goodbye", "thank you", "thanks"],
    answer:
      "You're welcome! 👋 Thanks for using Coinstep Assistant.",
  },
];