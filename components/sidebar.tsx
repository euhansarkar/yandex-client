/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { Button } from '@/components/ui/button'
import SidebarSkeleton from './sidebar-skeleton'



interface SidebarProps {
  loading?: boolean;
  categoryClickHandler: (id: string) => void;
  data: any 
}

export default function Sidebar({ loading, data, categoryClickHandler} :SidebarProps) {

  console.log(` see data from sidebar`, data);
  


  if (loading) {
    return (
      <aside className="w-64 fixed top-16 left-0 bottom-0 p-4 bg-white border-r overflow-y-auto hidden lg:block">
        <SidebarSkeleton />
      </aside>
    );
  }

  return (
    <aside className="w-64 fixed top-16 left-0 bottom-0 p-4 bg-white border-r overflow-y-auto hidden lg:block">
      <nav className="space-y-1">
        <h2 className="text-xl font-semibold mb-4">Menu</h2>
        {data?.categories?.map((item: any) => (
          <Button
            key={item?.id}
            variant="ghost"
            className="w-full justify-start"
            onClick={() => categoryClickHandler(item?.id)}
          >
            {item?.title}
          </Button>
        ))}
      </nav>
    </aside>
  );
}

