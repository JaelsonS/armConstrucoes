import { Route, Routes } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'
import { Home } from '@/pages/Home'
import { Empresa } from '@/pages/Empresa'
import { Servicos } from '@/pages/Servicos'
import { Obras } from '@/pages/Obras'
import { ObraDetail } from '@/pages/ObraDetail'
import { Orcamento } from '@/pages/Orcamento'
import { Contactos } from '@/pages/Contactos'
import { Candidaturas } from '@/pages/Candidaturas'
import { Privacidade } from '@/pages/Privacidade'
import { NotFound } from '@/pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="empresa" element={<Empresa />} />
        <Route path="servicos" element={<Servicos />} />
        <Route path="obras" element={<Obras />} />
        <Route path="obras/:slug" element={<ObraDetail />} />
        <Route path="orcamento" element={<Orcamento />} />
        <Route path="contactos" element={<Contactos />} />
        <Route path="candidaturas" element={<Candidaturas />} />
        <Route path="privacidade" element={<Privacidade />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
