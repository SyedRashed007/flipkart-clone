import paytmchecksum from '../paytm/PaytmChecksum.js'
import {paytmMerchantkey, paytmParams} from '../index.js'

export const addPaymentGateway = async (request, response) => {
    let paytmCheckSum = await paytmchecksum.generateSignature(paytmParams, paytmMerchantkey);

    try{
        let params = {
            ...paytmParams,
            'CHECKSUMHASH': paytmCheckSum
        }
        response.json(params)
    } catch(error){
        console.log(error)
    }
}