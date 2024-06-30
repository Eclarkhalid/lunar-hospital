import React, { useEffect, useState } from 'react'
import DashboardLayout from '../../../components/dashboard/DashboardLayout'
import Header from '../../../components/dashboard/Header'

import Image from "next/image"
import Link from "next/link"
import {
  File,
  Home,
  LineChart,
  ListFilter,
  MoreHorizontal,
  Package,
  Package2,
  PanelLeft,
  PlusCircle,
  Search,
  Settings,
  ShoppingCart,
  Users2,
} from "lucide-react"

import { Badge } from "../../../components/ui/badge"
import { Button } from "../../../components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../../components/ui/dropdown-menu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui/table"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../components/ui/tabs"
import axios from 'axios'

const Medicine = () => {
  const [medicine, setMedicine] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('/api/medicine').then(response => {

      setMedicine(response.data);
      setLoading(false);
    });
  }, []);
  return <>
    <DashboardLayout>
      <Header />
      <div className="flex h-screen w-full flex-col bg-muted/40 ">
        <div className="flex flex-col sm:gap-4 sm:py-4">
          <div className="px-6 flex gap-2">
            <Card
              className="sm:col-span-1 w-[350px]" x-chunk="dashboard-05-chunk-0"
            >
              <CardHeader className="pb-3">
                <CardTitle className='text-red-600'>Chemist Field Only</CardTitle>
                <CardDescription className="max-w-lg text-balance leading-relaxed">
                  Only chemist can add medicine
                </CardDescription>
              </CardHeader>
              <CardFooter>
                {/* <Button>Add New Patient</Button> */}
              </CardFooter>
            </Card>
            
          </div>
          <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
            <Tabs defaultValue="all">
              
              <TabsContent value="all">
                <Card x-chunk="dashboard-06-chunk-0">
                  <CardHeader>
                    <CardTitle>Medicine</CardTitle>
                    <CardDescription>
                      Manage your and add medicine information.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {medicine.length === 0 ? (
                      <p className="w-full text-center">No medicine found...</p>
                    ) : (
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>Quantity</TableHead>
                            <TableHead className="hidden md:table-cell">
                              Dosage
                            </TableHead>
                            <TableHead className="hidden md:table-cell">
                              Category
                            </TableHead>
                            <TableHead className="hidden md:table-cell">
                              Manufacturer
                            </TableHead>
                            <TableHead className="hidden md:table-cell">
                              Price
                            </TableHead>
                            <TableHead>
                              <span className="sr-only">Actions</span>
                            </TableHead>
                          </TableRow>
                        </TableHeader>
                        {medicine.map(medicine => (
                          <TableBody key={medicine.id}>
                            <TableRow>
                              <TableCell className="hidden sm:table-cell">
                                {medicine.name}
                              </TableCell>
                              <TableCell className="font-medium">
                                {medicine.quantity}
                              </TableCell>
                              <TableCell>
                                {medicine.dosage}
                              </TableCell>
                              <TableCell className="hidden md:table-cell">
                                {medicine.category}
                              </TableCell>
                              <TableCell className="hidden md:table-cell">
                                {medicine.manufacturer}
                              </TableCell>
                              <TableCell className="hidden md:table-cell">
                                Ksh. {medicine.price}
                              </TableCell>
                              <TableCell>
                                <DropdownMenu>
                                  <DropdownMenuTrigger asChild>
                                    <Button
                                      aria-haspopup="true"
                                      size="icon"
                                      variant="ghost"
                                    >
                                      <MoreHorizontal className="h-4 w-4" />
                                      <span className="sr-only">Toggle menu</span>
                                    </Button>
                                  </DropdownMenuTrigger>
                                  <DropdownMenuContent align="end">
                                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                    <Link href={"/dashboard/medicines/edit/" + medicine._id}>
                                        Edit
                                      </Link>
                                    <DropdownMenuItem>
                                      <Link href={"/dashboard/medicines/delete/" + medicine._id}>
                                        Delete
                                      </Link>
                                    </DropdownMenuItem>
                                  </DropdownMenuContent>
                                </DropdownMenu>
                              </TableCell>
                            </TableRow>
                          </TableBody>
                        ))}
                      </Table>
                    )}

                  </CardContent>
                  <CardFooter>
                    <div className="text-xs text-muted-foreground">
                      Showing <strong>1-10</strong> of <strong>32</strong>{" "}
                      medicine
                    </div>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </main>
        </div>
      </div>
    </DashboardLayout>
  </>
}

export default Medicine
