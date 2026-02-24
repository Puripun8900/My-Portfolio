const stacks = [
  {
    title: "Cloud & Infrastructure",
    items: [
      "AWS - EC2, VPC, S3, IAM, CloudFront/WAF.",
      "Amazon EKS and ECS cluster orchestration.",
      "GitOps with ArgoCD for automated deployments.",
      "Linux Hardening - RHEL/CentOS, SELinux, IPtables.",
      "Infrastructure as Code - Ansible and CloudFormation.",
    ],
  },
  {
    title: "DevSecOps & Automation",
    items: [
      "CI/CD using Jenkins (Groovy) and GitHub Actions.",
      "Automation Testing & Coveralls Integration.",
      "Zero-Downtime Deployment Designs.",
      "Docker Microservices Architecture.",
    ],
  },
  {
    title: "AI & Data",
    items: [
      "Python ML using TensorFlow and TinyML for Edge Devices.",
      "Metrics - Precision, Recall & Confusion Matrix.",
      "Data Management - PostgreSQL, RDS & DynamoDB.",
    ],
  },
  {
    title: "Virtualization & Embedded",
    items: [
      "vApps and Network Virtualization from LAB UAS.",
      "Yocto Project for Secure Linux Environments.",
      "Compliance - EU NIS2 and ISO 27001 (OpenSCAP).",
    ],
  },
]

export function TechStack() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {stacks.map((stack) => (
        <div
          key={stack.title}
          className="bg-card/80 backdrop-blur-sm rounded-2xl shadow-md p-5 md:p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-600/10"
        >
          <h4 className="text-blue-600 font-semibold text-base mb-3">
            {stack.title}
          </h4>
          <ul className="space-y-1.5 ml-4 list-disc">
            {stack.items.map((item) => (
              <li
                key={item}
                className="text-muted-foreground text-xs md:text-sm leading-relaxed"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
