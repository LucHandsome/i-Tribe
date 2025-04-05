"use client";
import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbProps {
  productName: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ productName }) => {
  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
      <Link href="/" className="hover:text-primary transition-colors">
        Trang chủ
      </Link>
      <ChevronRight className="h-4 w-4" />
      <Link href="/apple/ipad" className="hover:text-primary transition-colors">
        iPad
      </Link>
      <ChevronRight className="h-4 w-4" />
      <span className="text-primary">{productName}</span>
    </nav>
  );
};

export default Breadcrumb; 