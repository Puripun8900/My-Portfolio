const skills = [
  "GitOps & ArgoCD",
  "CI/CD (Jenkins / GitHub Actions)",
  "AWS (EKS, ECS, Lambda)",
  "Linux Hardening",
  "Ansible",
  "TinyML",
  "Machine Learning",
  "IoT Integration",
  "C# / Unity",
  "Python",
  "Game Programming",
  "English / Thai",
]

export function Skills() {
  return (
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span
          key={skill}
          className="bg-blue-100 text-blue-900 px-3 py-1.5 rounded-full text-xs md:text-sm font-medium transition-colors duration-300 hover:bg-blue-500 hover:text-white cursor-default"
        >
          {skill}
        </span>
      ))}
    </div>
  )
}
