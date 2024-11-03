import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "../components/ui/card"
import { Button } from './ui/button'

const portfolio_parameters = [  [ "Total Bonds" , 0 ],
                                [ "Total Investments" , 0.00 ],
                                [ "Gross Repayment" , 0.00 ]     ]
  
function Portfolio_kyc() {
  return (
    <div className='grid lg:grid-cols-3 grid-cols-1 gap-5 p-5' >
        <div id="portfolio_overview" className='lg:col-span-2'>
              <Card className='h-full w-full rounded-xl'>
                  <CardHeader>
                      <CardTitle>Portfolio Overview</CardTitle>
                      {/* <CardDescription>Card Description</CardDescription> */}
                  </CardHeader>
                  <CardContent className='flex gap-5 py-3'>
                      {
                        portfolio_parameters.map((factor, index) => (
                          <div key={index} className=''>
                          <h4 className='text-gray-500'>{factor[0]}</h4>
                          <h1 className='text-3xl font-bold'>{(index!=0) ? `₹0.00` : factor[1]}</h1>
                          </div>
                        ))
                      }
                  </CardContent>
                  {/* <CardFooter>
                      <p>Card Footer</p>
                  </CardFooter> */}
              </Card>
        </div>
        <div id="kyc_page" className='h-full w-full'>
              <Card className='rounded-xl w-full'>
                  <CardHeader>
                      <CardTitle>Complete KYC</CardTitle>
                      {/* <CardDescription>Card Description</CardDescription> */}
                  </CardHeader>
                  <CardContent>
                      <p>To invest in Bonds, complete your KYC and open a lifetime-free demat A/c on Earninn.</p>
                      <Button className='bg-black text-white font-medium w-full hover:text-black hover:bg-slate-100 my-4 rounded'>Begin KYC</Button>
                  </CardContent>
                  {/* <CardFooter>
                      <p>Card Footer</p>
                  </CardFooter> */}
              </Card>
        </div>

    </div>
  )
}

export default Portfolio_kyc