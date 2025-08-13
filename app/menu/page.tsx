import { Suspense } from 'react';
import MenuSkeleton from '../ui/menu/menu-skeleton';
import MenuList from '../ui/menu/menu-list';

export default async function Page() {
  return (
    <div className="flex flex-col items-center gap-5 py-10 px-5">
      <p className="text-red-700 font-bold md:text-lg text-sm uppercase">
        Our Selection
      </p>
      <h1 className="md:text-4xl text-2xl font-bold md:w-1/2 w-full text-center">
        A Menu That Will Always Capture Your Heart
      </h1>
      <Suspense fallback={<MenuSkeleton />}>
      <MenuList />
      </Suspense>
    </div>
  );
}
