"use client"

import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Home, Users, Phone, Camera, Shield, Building2, Star, CheckCircle } from "lucide-react"

export default function Component() {
  const [formData, setFormData] = useState({
    pgName: "",
    description: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    pgType: "",
    totalRooms: "",
    availableRooms: "",
    roomType: "",
    rentPerMonth: "",
    securityDeposit: "",
    electricityCharges: "",
    acCharges: "",
    maintenanceCharges: "",
    wifiCharges: "",
    foodCharges: "",
    ownerName: "",
    phone: "",
    email: "",
    alternatePhone: "",
    amenities: [],
    rules: "",
    images: [],
  })

  const amenitiesList = [
    "WiFi",
    "AC",
    "Laundry",
    "Parking",
    "Security",
    "Mess/Kitchen",
    "TV",
    "Refrigerator",
    "Water Cooler",
    "Power Backup",
    "Housekeeping",
    "CCTV",
  ]

  const handleAmenityChange = (amenity, checked) => {
    setFormData((prev) => ({
      ...prev,
      amenities: checked ? [...prev.amenities, amenity] : prev.amenities.filter((a) => a !== amenity),
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission here
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-teal-50">
      {/* Enhanced Header */}
      <div className="bg-gradient-to-r from-teal-600 via-teal-700 to-teal-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-32 -translate-x-32"></div>

        <div className="container mx-auto px-4 py-12 relative z-10">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm">
                <Building2 className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl font-bold">PGFinder</h1>
            </div>
            <h2 className="text-2xl font-semibold mb-2">List Your PG</h2>
            <p className="text-teal-100 max-w-2xl mx-auto">
              Join thousands of PG owners who trust PGFinder to connect with quality tenants. Fill out the details below
              to list your paying guest accommodation.
            </p>
            <div className="flex items-center justify-center gap-6 mt-6 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-teal-200" />
                <span className="text-teal-100">Free Listing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-teal-200" />
                <span className="text-teal-100">Verified Tenants</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-teal-200" />
                <span className="text-teal-100">24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-8">
          {/* Basic Information */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-r from-teal-50 to-teal-100/50 rounded-t-lg">
              <CardTitle className="flex items-center gap-3 text-black">
                <div className="bg-teal-600 p-2 rounded-lg">
                  <Home className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Basic Information</h3>
                  <p className="text-sm text-gray-600 font-normal">Tell us about your PG property</p>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 pt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="pgName" className="text-black font-medium flex items-center gap-2">
                    PG Name *
                    <Star className="h-3 w-3 text-teal-600" />
                  </Label>
                  <Input
                    id="pgName"
                    value={formData.pgName}
                    onChange={(e) => setFormData((prev) => ({ ...prev, pgName: e.target.value }))}
                    placeholder="Enter PG name"
                    className="border-teal-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all duration-200"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="pgType" className="text-black font-medium">
                    PG Type *
                  </Label>
                  <Select onValueChange={(value) => setFormData((prev) => ({ ...prev, pgType: value }))}>
                    <SelectTrigger className="border-teal-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200">
                      <SelectValue placeholder="Select PG type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="boys">Boys Only</SelectItem>
                      <SelectItem value="girls">Girls Only</SelectItem>
                      <SelectItem value="co-living">Co-living</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="description" className="text-black font-medium">
                  Description *
                </Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
                  placeholder="Describe your PG, nearby facilities, transportation, etc."
                  className="border-teal-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 min-h-[120px] transition-all duration-200"
                  required
                />
              </div>
            </CardContent>
          </Card>

          {/* Location Details */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-r from-teal-50 to-teal-100/50 rounded-t-lg">
              <CardTitle className="flex items-center gap-3 text-black">
                <div className="bg-teal-600 p-2 rounded-lg">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Location Details</h3>
                  <p className="text-sm text-gray-600 font-normal">Where is your PG located?</p>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 pt-8">
              <div className="space-y-2">
                <Label htmlFor="address" className="text-black font-medium">
                  Full Address *
                </Label>
                <Textarea
                  id="address"
                  value={formData.address}
                  onChange={(e) => setFormData((prev) => ({ ...prev, address: e.target.value }))}
                  placeholder="Enter complete address with landmarks"
                  className="border-teal-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all duration-200"
                  required
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="city" className="text-black font-medium">
                    City *
                  </Label>
                  <Input
                    id="city"
                    value={formData.city}
                    onChange={(e) => setFormData((prev) => ({ ...prev, city: e.target.value }))}
                    placeholder="City"
                    className="border-teal-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all duration-200"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state" className="text-black font-medium">
                    State *
                  </Label>
                  <Input
                    id="state"
                    value={formData.state}
                    onChange={(e) => setFormData((prev) => ({ ...prev, state: e.target.value }))}
                    placeholder="State"
                    className="border-teal-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all duration-200"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="pincode" className="text-black font-medium">
                    Pincode *
                  </Label>
                  <Input
                    id="pincode"
                    value={formData.pincode}
                    onChange={(e) => setFormData((prev) => ({ ...prev, pincode: e.target.value }))}
                    placeholder="Pincode"
                    className="border-teal-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all duration-200"
                    required
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Room & Pricing Details */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-r from-teal-50 to-teal-100/50 rounded-t-lg">
              <CardTitle className="flex items-center gap-3 text-black">
                <div className="bg-teal-600 p-2 rounded-lg">
                  <Users className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Room & Pricing Details</h3>
                  <p className="text-sm text-gray-600 font-normal">Room availability and pricing information</p>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8 pt-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="totalRooms" className="text-black font-medium">
                    Total Rooms *
                  </Label>
                  <Input
                    id="totalRooms"
                    type="number"
                    value={formData.totalRooms}
                    onChange={(e) => setFormData((prev) => ({ ...prev, totalRooms: e.target.value }))}
                    placeholder="Total number of rooms"
                    className="border-teal-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all duration-200"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="availableRooms" className="text-black font-medium">
                    Available Rooms *
                  </Label>
                  <Input
                    id="availableRooms"
                    type="number"
                    value={formData.availableRooms}
                    onChange={(e) => setFormData((prev) => ({ ...prev, availableRooms: e.target.value }))}
                    placeholder="Currently available rooms"
                    className="border-teal-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all duration-200"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="roomType" className="text-black font-medium">
                    Room Type *
                  </Label>
                  <Select onValueChange={(value) => setFormData((prev) => ({ ...prev, roomType: value }))}>
                    <SelectTrigger className="border-teal-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200">
                      <SelectValue placeholder="Select room type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="single">Single Sharing</SelectItem>
                      <SelectItem value="double">Double Sharing</SelectItem>
                      <SelectItem value="triple">Triple Sharing</SelectItem>
                      <SelectItem value="mixed">Mixed (Multiple Types)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="bg-gradient-to-r from-teal-50 to-teal-100/30 p-6 rounded-xl border border-teal-100">
                <h4 className="text-lg font-semibold text-black mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                  Basic Pricing
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="rentPerMonth" className="text-black font-medium">
                      Rent per Month (₹) *
                    </Label>
                    <Input
                      id="rentPerMonth"
                      type="number"
                      value={formData.rentPerMonth}
                      onChange={(e) => setFormData((prev) => ({ ...prev, rentPerMonth: e.target.value }))}
                      placeholder="Monthly rent amount"
                      className="border-teal-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 bg-white transition-all duration-200"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="securityDeposit" className="text-black font-medium">
                      Security Deposit (₹) *
                    </Label>
                    <Input
                      id="securityDeposit"
                      type="number"
                      value={formData.securityDeposit}
                      onChange={(e) => setFormData((prev) => ({ ...prev, securityDeposit: e.target.value }))}
                      placeholder="Security deposit amount"
                      className="border-teal-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 bg-white transition-all duration-200"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-gray-50 to-gray-100/30 p-6 rounded-xl border border-gray-200">
                <h4 className="text-lg font-semibold text-black mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                  Additional Charges
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="electricityCharges" className="text-black font-medium">
                      Electricity Charges (₹/month)
                    </Label>
                    <Input
                      id="electricityCharges"
                      type="number"
                      value={formData.electricityCharges}
                      onChange={(e) => setFormData((prev) => ({ ...prev, electricityCharges: e.target.value }))}
                      placeholder="Monthly electricity charges"
                      className="border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 bg-white transition-all duration-200"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="acCharges" className="text-black font-medium">
                      AC Charges (₹/month)
                    </Label>
                    <Input
                      id="acCharges"
                      type="number"
                      value={formData.acCharges}
                      onChange={(e) => setFormData((prev) => ({ ...prev, acCharges: e.target.value }))}
                      placeholder="Monthly AC charges"
                      className="border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 bg-white transition-all duration-200"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="maintenanceCharges" className="text-black font-medium">
                      Maintenance Charges (₹/month)
                    </Label>
                    <Input
                      id="maintenanceCharges"
                      type="number"
                      value={formData.maintenanceCharges}
                      onChange={(e) => setFormData((prev) => ({ ...prev, maintenanceCharges: e.target.value }))}
                      placeholder="Monthly maintenance charges"
                      className="border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 bg-white transition-all duration-200"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="wifiCharges" className="text-black font-medium">
                      WiFi Charges (₹/month)
                    </Label>
                    <Input
                      id="wifiCharges"
                      type="number"
                      value={formData.wifiCharges}
                      onChange={(e) => setFormData((prev) => ({ ...prev, wifiCharges: e.target.value }))}
                      placeholder="Monthly WiFi charges"
                      className="border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 bg-white transition-all duration-200"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="foodCharges" className="text-black font-medium">
                      Food Charges (₹/month)
                    </Label>
                    <Input
                      id="foodCharges"
                      type="number"
                      value={formData.foodCharges}
                      onChange={(e) => setFormData((prev) => ({ ...prev, foodCharges: e.target.value }))}
                      placeholder="Monthly food charges"
                      className="border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 bg-white transition-all duration-200"
                    />
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-4 bg-white/50 p-3 rounded-lg">
                  💡 <strong>Tip:</strong> Leave blank if charges are included in rent or not applicable
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Amenities */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-r from-teal-50 to-teal-100/50 rounded-t-lg">
              <CardTitle className="flex items-center gap-3 text-black">
                <div className="bg-teal-600 p-2 rounded-lg">
                  <Shield className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Amenities</h3>
                  <p className="text-sm text-gray-600 font-normal">What facilities do you provide?</p>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-8">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {amenitiesList.map((amenity) => (
                  <div
                    key={amenity}
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-teal-50 transition-colors duration-200"
                  >
                    <Checkbox
                      id={amenity}
                      onCheckedChange={(checked) => handleAmenityChange(amenity, !!checked)}
                      className="border-teal-300 data-[state=checked]:bg-teal-600 data-[state=checked]:border-teal-600"
                    />
                    <Label htmlFor={amenity} className="text-sm text-black cursor-pointer font-medium">
                      {amenity}
                    </Label>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Owner Contact Information */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-r from-teal-50 to-teal-100/50 rounded-t-lg">
              <CardTitle className="flex items-center gap-3 text-black">
                <div className="bg-teal-600 p-2 rounded-lg">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Owner Contact Information</h3>
                  <p className="text-sm text-gray-600 font-normal">How can tenants reach you?</p>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 pt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="ownerName" className="text-black font-medium">
                    Owner Full Name *
                  </Label>
                  <Input
                    id="ownerName"
                    value={formData.ownerName}
                    onChange={(e) => setFormData((prev) => ({ ...prev, ownerName: e.target.value }))}
                    placeholder="Your full name"
                    className="border-teal-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all duration-200"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-black font-medium">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                    placeholder="Your email address"
                    className="border-teal-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all duration-200"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-black font-medium">
                    Primary Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                    placeholder="Your primary phone number"
                    className="border-teal-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all duration-200"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="alternatePhone" className="text-black font-medium">
                    Alternate Phone Number
                  </Label>
                  <Input
                    id="alternatePhone"
                    type="tel"
                    value={formData.alternatePhone}
                    onChange={(e) => setFormData((prev) => ({ ...prev, alternatePhone: e.target.value }))}
                    placeholder="Alternate contact number"
                    className="border-teal-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all duration-200"
                  />
                </div>
              </div>
              <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-6 rounded-xl border border-teal-100">
                <div className="flex items-start gap-3">
                  <div className="bg-teal-600 p-2 rounded-lg mt-1">
                    <Shield className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-black font-medium mb-1">Privacy & Security</p>
                    <p className="text-sm text-gray-600">
                      Your contact information will be visible to verified tenants only. We ensure your privacy and
                      provide secure communication channels.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Rules & Policies */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-r from-teal-50 to-teal-100/50 rounded-t-lg">
              <CardTitle className="flex items-center gap-3 text-black">
                <div className="bg-teal-600 p-2 rounded-lg">
                  <Shield className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Rules & Policies</h3>
                  <p className="text-sm text-gray-600 font-normal">Set clear expectations for tenants</p>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 pt-8">
              <div className="space-y-2">
                <Label htmlFor="rules" className="text-black font-medium">
                  House Rules
                </Label>
                <Textarea
                  id="rules"
                  value={formData.rules}
                  onChange={(e) => setFormData((prev) => ({ ...prev, rules: e.target.value }))}
                  placeholder="Enter house rules, timings, restrictions, guest policies, etc."
                  className="border-teal-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 min-h-[120px] transition-all duration-200"
                />
              </div>
            </CardContent>
          </Card>

          {/* Images Upload */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-r from-teal-50 to-teal-100/50 rounded-t-lg">
              <CardTitle className="flex items-center gap-3 text-black">
                <div className="bg-teal-600 p-2 rounded-lg">
                  <Camera className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Property Images</h3>
                  <p className="text-sm text-gray-600 font-normal">Showcase your PG with quality photos</p>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-8">
              <div className="border-2 border-dashed border-teal-300 rounded-xl p-12 text-center bg-gradient-to-br from-teal-50/50 to-white hover:from-teal-50 transition-all duration-300">
                <div className="bg-teal-100 p-4 rounded-full w-fit mx-auto mb-4">
                  <Camera className="h-8 w-8 text-teal-600" />
                </div>
                <p className="text-black font-medium mb-2">Upload property images</p>
                <p className="text-sm text-gray-600 mb-6">
                  Add photos of rooms, common areas, kitchen, and exterior. High-quality images get more inquiries!
                </p>
                <Button
                  type="button"
                  variant="outline"
                  className="border-teal-600 text-teal-600 hover:bg-teal-50 bg-transparent hover:border-teal-700 transition-all duration-200"
                >
                  Choose Images
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Submit Button */}
          <div className="flex justify-center pt-8">
            <Button
              type="submit"
              className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white px-16 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              🏠 List My PG on PGFinder
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
