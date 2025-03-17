import { useState } from 'react'
import { MailList } from '@/components'
import { useEmails } from '@/api/emailList'

export function EmailsView() {
    // TODO: Add actual virtual scrolling.
    const [query, setQuery] = useState('');
    const { isValidating, error, data } = useEmails({
        page: 1,
        pageSize: 100,
        query,
    })

    if (error) return <code>Failed to load</code>
    if (isValidating && !data) return null
    if (!isValidating && !data?.length === 0) return <code>No results...</code>

    return <MailList
        inboxItems={data.items}
        query={query.current}
        setQuery={setQuery}
        isLoading />
}
