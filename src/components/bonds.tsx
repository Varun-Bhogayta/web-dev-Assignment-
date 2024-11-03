
import { Button } from "./ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "./ui/card"
import { Badge } from "./ui/badge"

const bonds_data = [
    {
        bond_name: "Gold Bond",
        sell_percent: 38.67,
        XIRR: 5.73,
        Maturity_date: 60,
        min_invest: "8k"
    },
    {
        bond_name: "Defence and Aviation Bond",
        sell_percent: 45.02,
        XIRR: 13.40,
        Maturity_date: 12,
        min_invest: "4k"
    },
    {
        bond_name: "Gujarat Solar Bond",
        sell_percent: 98.45,
        XIRR: 18.92,
        Maturity_date: 36,
        min_invest: "15k"
    }
]
function Bonds() {
    return (
        <div className="m-5">
            <h1 className='font-extrabold text-3xl flex justify-center m-7'>All Bonds</h1>
            <div id="bond_list" className="grid xl:grid-cols-3 gap-3">

                {bonds_data.map((item, index) => (
                    <Card className="w-full my-3 rounded-xl">
                        <CardHeader className="">
                            <CardTitle className="col-span-3">{`${++index}. ${item.bond_name}`} <Badge variant={"outline"} className="bg-slate-100 py-1 m-1 flex-col justify-center">{item.sell_percent}% sold</Badge></CardTitle>
                            
                            {/* <CardDescription>Card Description</CardDescription> */}
                        </CardHeader>
                        <CardContent>
                            <div id="bond_data" className="flex justify-between">
                                <div id="xirr">
                                    <div>XIRR</div>
                                    <div className="font-bold">{item.XIRR}%</div>
                                </div>
                                <div id="maturity_time">
                                    <div>Maturity Time</div>
                                    <div className="font-bold">~{item.Maturity_date} Months</div>
                                </div>
                                <div id="min_invest">
                                    <div>Minimum Investment</div>
                                    <div className="font-bold">₹{item.min_invest}</div>
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button variant={"link"} className="font-semibold p-1">View Details {'>'}</Button>
                        </CardFooter>
                    </Card>
                ))}
                

            </div>
            <div className="flex justify-center">
                    <Button variant={"outline"} className="m-3 py-5 px-16 flex justify-center border-zinc-300 rounded hover:bg-slate-100 ">View all</Button>
            </div>


        </div>
    )
}

export default Bonds