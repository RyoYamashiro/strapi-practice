'use client'

import { useEffect, useState } from 'react'

type Project = {
  id: number
  docId: string
  title: string
  projectStatus: string
  tags: string
  releasedDate: string
  isActive: boolean
}

export default function Home() {
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    const fetchProjects = async () => {
      const res = await fetch('http://localhost:1337/api/projects')
      const json = await res.json()

      console.log('🧪 APIからのレスポンス:', json)

      // attributesがない → そのままitemを展開
      const projectList = json.data.map((item: any) => ({
        id: item.id,
        docId: item.docId,
        title: item.title,
        projectStatus: item.projectStatus,
        tags: item.tags,
        releasedDate: item.releasedDate,
        isActive: item.isActive
      }))

      console.log('✅ projectList:', projectList)
      setProjects(projectList)
    }

    fetchProjects()
  }, [])

  return (
    <main style={{ padding: '2rem' }}>
      <h1>📦 プロジェクト一覧</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id} style={{ marginBottom: '1rem' }}>
            <h2>{project.title}</h2>
            <p>🆔 docId: {project.docId ?? '（未設定）'}</p>
            <p>📌 Status: {project.projectStatus}</p>
            <p>
              🏷️ Tags:{' '}
              {typeof project.tags === 'string'
                ? project.tags.split(',').map(tag => tag.trim()).join(', ')
                : 'なし'}
            </p>
            <p>📅 Released: {project.releasedDate}</p>
            <p>✅ Active: {project.isActive ? 'Yes' : 'No'}</p>
          </li>
        ))}
      </ul>
    </main>
  )
}