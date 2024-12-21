import { BrowserRouter, Routes, Route } from 'react-router'

import Layout from './Layout'
import HomePage from '@/pages/Home'
import SalesPage from '@/pages/Sales'
import ChatPage from '@/pages/Chat'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='sales' element={<SalesPage />} />
          <Route path='chat' element={<ChatPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
