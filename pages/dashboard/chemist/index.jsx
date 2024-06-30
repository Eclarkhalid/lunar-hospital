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

const Chemist = () => {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('/api/patients').then(response => {

      setPatients(response.data);
      setLoading(false);
    });
  }, []);
  return <>
    <DashboardLayout>
      <Header />
      <div className="flex h-screen w-full flex-col bg-muted/40 ">
        <div className="flex flex-col sm:gap-4 sm:py-4">
          <div className="px-6 flex justify-start gap-2">
            
            <Card
              className="sm:col-span-1 w-[550px]" x-chunk="dashboard-05-chunk-0"
            >
              <CardHeader className="pb-3">
                <CardTitle>Ai Doctor</CardTitle>
                <CardDescription className="max-w-lg text-balance leading-relaxed">
                  With AI Doctor, you can efficiently track patient prescriptions, dosage instructions, medical history, and more, enhancing overall healthcare delivery and patient outcomes.
                </CardDescription>

              </CardHeader>
              <CardFooter>
                <Button onClick={() => {
                  window.location.href = '/dashboard/chat';
                }}>Prescribe with AI</Button>
              </CardFooter>
            </Card>
            <Card
              className="sm:col-span-1 w-[350px]" x-chunk="dashboard-05-chunk-0"
            >
              <CardHeader className="pb-3">
                <CardTitle>Medicines</CardTitle>
                <CardDescription className="max-w-lg text-gray-800 leading-relaxed mt-2">
                  Manage your and add medicines information.
                </CardDescription>
                <CardContent className='p-6'></CardContent>
              </CardHeader>
              <CardFooter>
                <Button variant="outline" onClick={() => {
                  window.location.href = '/dashboard/medicines/new';
                }}>Add Medicine</Button>
              </CardFooter>
            </Card>
          </div>
          <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
            <Tabs defaultValue="all">
              {/* <div className="flex items-center">
                <TabsList>
                  <TabsTrigger value="all">All</TabsTrigger>

                </TabsList>
                <div className="ml-auto flex items-center gap-2">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm" className="h-8 gap-1">
                        <ListFilter className="h-3.5 w-3.5" />
                        <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                          Filter
                        </span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuCheckboxItem checked>
                        Active
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem>Draft</DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem>
                        Archived
                      </DropdownMenuCheckboxItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <Button size="sm" variant="outline" className="h-8 gap-1">
                    <File className="h-3.5 w-3.5" />
                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                      Export
                    </span>
                  </Button>
                  <Button size="lg" className="h-12 gap-1" onClick={() => {
                    window.location.href = '/dashboard/patients/new';
                  }}>
                    <PlusCircle className="h-3.5 w-3.5" />
                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                      Add Patient
                    </span>
                  </Button>
                </div>
              </div> */}
              <TabsContent value="all">
                <Card x-chunk="dashboard-06-chunk-0">
                  <CardHeader>
                    <CardTitle>Patients</CardTitle>
                    <CardDescription>
                      Manage your and add patients information.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {patients.length === 0 ? (
                      <p className="w-full text-center">No patients found...</p>
                    ) : (
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>First Name</TableHead>
                            <TableHead>Last Name</TableHead>
                            <TableHead className="hidden md:table-cell">
                              Phone
                            </TableHead>
                            <TableHead className="hidden md:table-cell">
                              Gender
                            </TableHead>
                            <TableHead className="hidden md:table-cell">
                              Date of Birth
                            </TableHead>
                            <TableHead className="hidden md:table-cell">
                              Email
                            </TableHead>
                            <TableHead>
                              <span className="sr-only">Actions</span>
                            </TableHead>
                          </TableRow>
                        </TableHeader>
                        {patients.map(patient => (
                          <TableBody key={patient.id}>
                            <TableRow>
                              <TableCell className="hidden sm:table-cell">
                                {patient.name}
                              </TableCell>
                              <TableCell className="font-medium">
                                {patient.lastName}
                              </TableCell>
                              <TableCell>
                                {patient.phone}
                              </TableCell>
                              <TableCell className="hidden md:table-cell">
                                {patient.gender}
                              </TableCell>
                              <TableCell className="hidden md:table-cell">
                                {patient.dob}
                              </TableCell>
                              <TableCell className="hidden md:table-cell">
                                {patient.email}
                              </TableCell>
                              <TableCell>
                                <Link href={"/dashboard/patients/edit/" + patient._id} className='px-4 py-2 border rounded-sm'>
                                  Prescribe
                                </Link>
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
                      patients
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

export default Chemist
