import connectMongoDB from "../../libs/mongodb"
import Listing from "../../models/listingSchema";
import { NextResponse } from "next/server";
import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
    const { title, description, quantity, expirationDate, location, contactInfo, imageSrc } = await request.json();
    await connectMongoDB();
    await Listing.create({ title, description, quantity, expirationDate, location, contactInfo, imageSrc });
    return NextResponse.json({ message: "Item added successfully" }, {status: 200});
}