const RequestIp = require('request-ip');
const Claimer = require('../models/claimer');
const { isLessThan24Hour, isValidSubstrateAddress } = require('../utils');
const { SubmitTrx } = require('../utils/submitTrx');

exports.claimTestnet = async(req, res) => {
  if(!isValidSubstrateAddress(req.body.address)) {
    return res.status(400).json({
      success: false,
      data: 'Invalid address!'
    })
  }
  // checking...
  const clientIp = RequestIp.getClientIp(req);
  const ip = await Claimer.findOne({ip: clientIp});
  const claimer = await Claimer.findOne({address: req.body.address});

  if(clientIp === null) {
    return res.status(400).json({
      success: false,
      data: 'You can not request at this time!'
    })
  }
  
  if(ip || claimer) {
    const date = ip ? new Date(ip.last_claimed) : new Date(claimer.last_claimed);
    const available = !isLessThan24Hour(date);
    
    if(available) {
      const trx = await SubmitTrx({testnet: true, destination: req.body.address});
      if(!trx) return;

      await Claimer.findOneAndUpdate(
        { address: req.body.address },
        { last_claimed: Date.now() },
        {
          new: true,
          runValidators: true
        }
      )
      res.status(201).json({
        success: true,
        data: 'Request completed!'
      })
    } else {
      res.status(400).json({
        success: false,
        data: 'You can not request at this time!'
      })
    }
  } 
  else {
    await SubmitTrx({testnet: true, destination: req.body.address});
    await Claimer.create({
      address: req.body.address,
      token: 'testnet',
      ip: clientIp
    })
    res.status(201).json({
      success: true,
      data: 'Request completed!'
    })
  }
}

exports.claimMainnet = async(req, res) => {
  if(!isValidSubstrateAddress(req.body.address)) {
    return res.status(400).json({
      success: false,
      data: 'Invalid address!'
    })
  }
  // checking...
  const clientIp = RequestIp.getClientIp(req);
  const ip = await Claimer.findOne({ip: clientIp});
  const claimer = await Claimer.findOne({address: req.body.address});

  if(clientIp === null) {
    return res.status(400).json({
      success: false,
      data: 'You can not request at this time!'
    })
  }
  
  if(ip || claimer) {
    const date = ip ? new Date(ip.last_claimed) : new Date(claimer.last_claimed);
    const available = !isLessThan24Hour(date);
    
    if(available) {
      const trx = await SubmitTrx({testnet: true, destination: req.body.address});
      if(!trx) return;

      await Claimer.findOneAndUpdate(
        { address: req.body.address },
        { last_claimed: Date.now() },
        {
          new: true,
          runValidators: true
        }
      )
      res.status(201).json({
        success: true,
        data: 'Request completed!'
      })
    } else {
      res.status(400).json({
        success: false,
        data: 'You can not request at this time!'
      })
    }
  } 
  else {
    await SubmitTrx({testnet: true, destination: req.body.address});
    await Claimer.create({
      address: req.body.address,
      token: 'testnet',
      ip: clientIp
    })
    res.status(201).json({
      success: true,
      data: 'Request completed!'
    })
  }
}