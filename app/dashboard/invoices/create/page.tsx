import Form from '@/app/ui/invoices/create-form';
import Breadscrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchCustomers } from '@/app/lib/data';

export default async function Page(){
    const customers = await fetchCustomers();

    return (
        <main>
            <Breadscrumbs
                breadcrumbs={[
                        {label: 'invoices', href:'/dashboard/invoices'},
                        {
                            label: 'Create Invoices',
                            href: '/dashboard/invoices/create',
                            active: true,
                        },
                    ]}
            />
            <Form customers={customers}/>
        </main>
    )
}