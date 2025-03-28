import{h as S,g as v}from"./index-D4C7RV5M.js";import{e as C}from"./index-BBnbFz86.js";import{e as H}from"./events-Bz9UGFgm.js";function y(r,n){for(var o=0;o<n.length;o++){const e=n[o];if(typeof e!="string"&&!Array.isArray(e)){for(const h in e)if(h!=="default"&&!(h in r)){const u=Object.getOwnPropertyDescriptor(e,h);u&&Object.defineProperty(r,h,u.get?u:{enumerable:!0,get:()=>e[h]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var x={},p={};const I=S(C);var f={};Object.defineProperty(f,"__esModule",{value:!0});f.numberToHex=f.getLowerCase=void 0;function E(r){return r&&r.toLowerCase()}f.getLowerCase=E;function A(r){return`0x${r.toString(16)}`}f.numberToHex=A;Object.defineProperty(p,"__esModule",{value:!0});p.SafeAppProvider=void 0;const l=I,N=H,i=f;class P extends N.EventEmitter{constructor(n,o){super(),this.submittedTxs=new Map,this.safe=n,this.sdk=o}async connect(){this.emit("connect",{chainId:this.chainId})}async disconnect(){}get chainId(){return this.safe.chainId}async request(n){var h,u,w,T;const{method:o,params:e=[]}=n;switch(o){case"eth_accounts":return[this.safe.safeAddress];case"net_version":case"eth_chainId":return(0,i.numberToHex)(this.chainId);case"personal_sign":{const[s,t]=e;if(this.safe.safeAddress.toLowerCase()!==t.toLowerCase())throw new Error("The address or message hash is invalid");const a=await this.sdk.txs.signMessage(s);return("signature"in a?a.signature:void 0)||"0x"}case"eth_sign":{const[s,t]=e;if(this.safe.safeAddress.toLowerCase()!==s.toLowerCase()||!t.startsWith("0x"))throw new Error("The address or message hash is invalid");const a=await this.sdk.txs.signMessage(t);return("signature"in a?a.signature:void 0)||"0x"}case"eth_signTypedData":case"eth_signTypedData_v4":{const[s,t]=e,a=typeof t=="string"?JSON.parse(t):t;if(this.safe.safeAddress.toLowerCase()!==s.toLowerCase())throw new Error("The address is invalid");const d=await this.sdk.txs.signTypedMessage(a);return("signature"in d?d.signature:void 0)||"0x"}case"eth_sendTransaction":const c={...e[0],value:e[0].value||"0",data:e[0].data||"0x"};typeof c.gas=="string"&&c.gas.startsWith("0x")&&(c.gas=parseInt(c.gas,16));const m=await this.sdk.txs.send({txs:[c],params:{safeTxGas:c.gas}});return this.submittedTxs.set(m.safeTxHash,{from:this.safe.safeAddress,hash:m.safeTxHash,gas:0,gasPrice:"0x00",nonce:0,input:c.data,value:c.value,to:c.to,blockHash:null,blockNumber:null,transactionIndex:null}),m.safeTxHash;case"eth_blockNumber":return(await this.sdk.eth.getBlockByNumber(["latest"])).number;case"eth_getBalance":return this.sdk.eth.getBalance([(0,i.getLowerCase)(e[0]),e[1]]);case"eth_getCode":return this.sdk.eth.getCode([(0,i.getLowerCase)(e[0]),e[1]]);case"eth_getTransactionCount":return this.sdk.eth.getTransactionCount([(0,i.getLowerCase)(e[0]),e[1]]);case"eth_getStorageAt":return this.sdk.eth.getStorageAt([(0,i.getLowerCase)(e[0]),e[1],e[2]]);case"eth_getBlockByNumber":return this.sdk.eth.getBlockByNumber([e[0],e[1]]);case"eth_getBlockByHash":return this.sdk.eth.getBlockByHash([e[0],e[1]]);case"eth_getTransactionByHash":let g=e[0];try{g=(await this.sdk.txs.getBySafeTxHash(g)).txHash||g}catch{}return this.submittedTxs.has(g)?this.submittedTxs.get(g):this.sdk.eth.getTransactionByHash([g]).then(s=>(s&&(s.hash=e[0]),s));case"eth_getTransactionReceipt":{let s=e[0];try{s=(await this.sdk.txs.getBySafeTxHash(s)).txHash||s}catch{}return this.sdk.eth.getTransactionReceipt([s]).then(t=>(t&&(t.transactionHash=e[0]),t))}case"eth_estimateGas":return this.sdk.eth.getEstimateGas(e[0]);case"eth_call":return this.sdk.eth.call([e[0],e[1]]);case"eth_getLogs":return this.sdk.eth.getPastLogs([e[0]]);case"eth_gasPrice":return this.sdk.eth.getGasPrice();case"wallet_getPermissions":return this.sdk.wallet.getPermissions();case"wallet_requestPermissions":return this.sdk.wallet.requestPermissions(e[0]);case"safe_setSettings":return this.sdk.eth.setSafeSettings([e[0]]);case"wallet_sendCalls":{if(e[0].from!==this.safe.safeAddress)throw Error("Invalid from address");const s=e[0].calls.map((a,d)=>{if(a.chainId!==(0,i.numberToHex)(this.chainId))throw new Error(`Invalid call #${d}: Safe is not on chain ${a.chainId}`);if(!a.to)throw new Error(`Invalid call #${d}: missing "to" field`);return{to:a.to,data:a.data??"0x",value:a.value??(0,i.numberToHex)(0)}}),{safeTxHash:t}=await this.sdk.txs.send({txs:s});return t}case"wallet_getCallsStatus":{const s={[l.TransactionStatus.AWAITING_CONFIRMATIONS]:"PENDING",[l.TransactionStatus.AWAITING_EXECUTION]:"PENDING",[l.TransactionStatus.CANCELLED]:"CONFIRMED",[l.TransactionStatus.FAILED]:"CONFIRMED",[l.TransactionStatus.SUCCESS]:"CONFIRMED"},t=await this.sdk.txs.getBySafeTxHash(e[0]).catch(()=>null);if(!(t!=null&&t.txHash))throw new Error("Transaction not found");const a=await this.sdk.eth.getTransactionReceipt([t.txHash]).catch(()=>null);if(!a)throw new Error("Transaction receipt not found");const d=((u=(h=t.txData)==null?void 0:h.dataDecoded)==null?void 0:u.method)!=="multiSend"?1:((T=(w=t.txData.dataDecoded.parameters)==null?void 0:w[0].valueDecoded)==null?void 0:T.length)??1,_=Number(a.blockNumber),b=Number(a.gasUsed),k=Array(d).fill({success:(0,i.numberToHex)(t.txStatus===l.TransactionStatus.SUCCESS?1:0),blockHash:a.blockHash,blockNumber:(0,i.numberToHex)(_),blockTimestamp:(0,i.numberToHex)(t.executedAt??0),gasUsed:(0,i.numberToHex)(b),transactionHash:t.txHash,logs:a.logs});return{status:s[t.txStatus],receipts:k}}case"wallet_showCallsStatus":throw new Error(`"${n.method}" not supported`);case"wallet_getCapabilities":return{[(0,i.numberToHex)(this.chainId)]:{atomicBatch:{supported:!0}}};default:throw Error(`"${n.method}" not implemented`)}}send(n,o){n||o("Undefined request"),this.request(n).then(e=>o(null,{jsonrpc:"2.0",id:n.id,result:e})).catch(e=>o(e,null))}}p.SafeAppProvider=P;(function(r){Object.defineProperty(r,"__esModule",{value:!0}),r.SafeAppProvider=void 0;var n=p;Object.defineProperty(r,"SafeAppProvider",{enumerable:!0,get:function(){return n.SafeAppProvider}})})(x);const L=v(x),j=y({__proto__:null,default:L},[x]);export{j as i};
