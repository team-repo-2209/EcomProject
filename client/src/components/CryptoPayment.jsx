// import Web3 from "web3";

// export default function CryptoPayment() {
//   let connected = ref(false);
//   let checkoutStep = ref(false);
//   let updateModal = ref(0);
//   let processingPayment = ref(false);
//   let paymentCompleted = ref(false);
//   let paymentFailed = ref(false);
//   const sellerAddress = "0xcb0F74e81aC9Fa67fcc67237d0A3B6B83070c0b5";
//   let buyerAddress = ref("");

//   const itemPriceInWei = "11800000000000"; // 29.99$ in wei (at time of dev)

//   checkIfWalletConnected();
//   function checkIfWalletConnected() {
//     if (
//       window.ethereum
//         .request({ method: "eth_accounts" })
//         .then(function (accounts) {
//           if (accounts.length > 0) {
//             connected.value = true;
//             buyerAddress.value = accounts[0];
//           } else {
//             connected.value = false;
//           }
//         })
//     ) {
//       connected.value = true;
//     } else {
//       connected.value = false;
//     }
//   }

//   // Function to check if blockchain wallet is connected
//   function checkWalletConnected() {
//     if (window.ethereum) {
//       console.log("MetaMask is installed");
//       window.web3 = new Web3(window.ethereum);
//       window.ethereum.send("eth_requestAccounts").then(function () {
//         // Get account address
//         window.ethereum
//           .request({ method: "eth_accounts" })
//           .then(function (accounts) {
//             if (accounts.length > 0) {
//               var address = accounts[0];
//               buyerAddress.value = address;
//               connected.value = true;
//               updateModal.value++;
//             } else {
//               address = false;
//             }
//           });
//       });
//     } else if (window.web3) {
//       window.web3 = new Web3(window.web3.currentProvider);
//       connected = true;
//       // Force update of the modal
//       updateModal.value++;
//     } else {
//       connected = false;
//     }
//   }
//   function proceedToCheckout() {
//     checkoutStep.value = true;
//     paymentFailed.value = false;
//     // Force update of the modal
//     updateModal.value++;
//   }
//   function makePaymentRequest() {
//     // Make request to create payment request
//     checkoutStep.value = false;
//     processingPayment.value = true;
//     // Start wallet payment process
//     window.ethereum
//       .request({
//         method: "eth_sendTransaction",
//         params: [
//           {
//             from: buyerAddress.value,
//             to: sellerAddress,
//             value: itemPriceInWei,
//           },
//         ],
//       })
//       .then((response) => {
//         console.log(response);
//         processingPayment.value = false;
//         paymentCompleted.value = true;
//       })
//       .catch((error) => {
//         processingPayment.value = false;
//         paymentFailed.value = true;
//       });
//   }
// }
