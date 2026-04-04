// Root route redirect to portfolio home
import { redirect } from 'next/navigation';

export default function RootPage() {
  redirect('/');
}
