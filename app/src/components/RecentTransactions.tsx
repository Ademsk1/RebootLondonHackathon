interface Transaction {
  merchant: string
  amount: number
  date: string
  type: 'credit' | 'debit'
}

interface RecentTransactionsProps {
  transactions?: Transaction[]
}

const defaultTransactions: Transaction[] = [
  {
    merchant: 'Tesco',
    amount: 25.40,
    date: 'Today, 14:30',
    type: 'debit'
  },
  {
    merchant: 'Salary',
    amount: 2500.00,
    date: 'Yesterday',
    type: 'credit'
  }
]

export default function RecentTransactions({ transactions = defaultTransactions }: RecentTransactionsProps) {
  return (
    <div className="mx-6 mt-8">
      <h2 className="mb-4 text-lg font-semibold text-gray-900">Recent Transactions</h2>
      <div className="rounded-2xl bg-white p-4">
        {transactions.map((transaction, index) => (
          <div key={index} className="flex items-center justify-between border-b border-gray-100 py-3">
            <div>
              <p className="font-medium text-gray-800">{transaction.merchant}</p>
              <p className="text-sm text-gray-500">{transaction.date}</p>
            </div>
            <p className={`font-medium ${transaction.type === 'credit' ? 'text-green-500' : 'text-red-500'}`}>
              {transaction.type === 'credit' ? '+' : '-'}£{transaction.amount.toFixed(2)}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
} 