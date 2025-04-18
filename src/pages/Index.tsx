
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Database, FileText, Users } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <header className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-blue-900 mb-4">
            Job Board API Documentation
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A RESTful API for a Job Board platform where Companies can post jobs and Candidates can apply.
          </p>
        </header>

        {/* Project Overview */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-blue-800">Project Overview</CardTitle>
              <CardDescription>
                Core features and technology stack
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex flex-col space-y-2">
                  <h3 className="text-lg font-semibold">Technology Stack</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Laravel 10+</li>
                    <li>MySQL Database</li>
                    <li>Laravel Passport (OAuth2)</li>
                    <li>Laravel Queues</li>
                    <li>Laravel Cache</li>
                  </ul>
                </div>
                <div className="flex flex-col space-y-2">
                  <h3 className="text-lg font-semibold">Key Features</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Separate authentication for Companies and Candidates</li>
                    <li>Job posting management (CRUD operations)</li>
                    <li>Public job listings with advanced filtering</li>
                    <li>Job application system with file uploads</li>
                    <li>Caching for improved performance</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Core Features */}
        <section className="mb-12 grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader className="bg-blue-50 rounded-t-lg">
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-blue-600" />
                <span>Authentication</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Separate registration and login for Companies and Candidates</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Laravel Passport OAuth2 authentication</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>JWT token generation and validation</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="bg-blue-50 rounded-t-lg">
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-blue-600" />
                <span>Job Management</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Companies can create, update, and delete (soft delete) job posts</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Companies can view only their posted jobs</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Public job listings with filtering (location, remote, keywords)</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="bg-blue-50 rounded-t-lg">
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-blue-600" />
                <span>Job Applications</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Candidates can apply with cover letter and resume</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Prevention of duplicate applications</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>File upload processing via queues</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="bg-blue-50 rounded-t-lg">
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5 text-blue-600" />
                <span>Performance</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Caching public job listings for 5 minutes</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Queue processing for file uploads</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Pagination for all listing endpoints</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* API Endpoints */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-blue-800">API Endpoints</CardTitle>
              <CardDescription>
                Key endpoints in the Job Board API
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Authentication</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-blue-50">
                          <th className="border border-gray-300 px-4 py-2 text-left">Method</th>
                          <th className="border border-gray-300 px-4 py-2 text-left">Endpoint</th>
                          <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">POST</td>
                          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">/api/companies/register</td>
                          <td className="border border-gray-300 px-4 py-2">Register a new company</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">POST</td>
                          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">/api/companies/login</td>
                          <td className="border border-gray-300 px-4 py-2">Company login</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">POST</td>
                          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">/api/candidates/register</td>
                          <td className="border border-gray-300 px-4 py-2">Register a new candidate</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">POST</td>
                          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">/api/candidates/login</td>
                          <td className="border border-gray-300 px-4 py-2">Candidate login</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Job Management</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-blue-50">
                          <th className="border border-gray-300 px-4 py-2 text-left">Method</th>
                          <th className="border border-gray-300 px-4 py-2 text-left">Endpoint</th>
                          <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">GET</td>
                          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">/api/jobs</td>
                          <td className="border border-gray-300 px-4 py-2">List all published jobs (public)</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">GET</td>
                          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">/api/jobs/{"{id}"}</td>
                          <td className="border border-gray-300 px-4 py-2">View job details (public)</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">POST</td>
                          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">/api/jobs</td>
                          <td className="border border-gray-300 px-4 py-2">Create new job (company only)</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">PUT</td>
                          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">/api/jobs/{"{id}"}</td>
                          <td className="border border-gray-300 px-4 py-2">Update job (company only)</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">DELETE</td>
                          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">/api/jobs/{"{id}"}</td>
                          <td className="border border-gray-300 px-4 py-2">Delete job (soft delete, company only)</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">GET</td>
                          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">/api/companies/jobs</td>
                          <td className="border border-gray-300 px-4 py-2">List company's jobs (company only)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Applications</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-blue-50">
                          <th className="border border-gray-300 px-4 py-2 text-left">Method</th>
                          <th className="border border-gray-300 px-4 py-2 text-left">Endpoint</th>
                          <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">POST</td>
                          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">/api/jobs/{"{id}"}/apply</td>
                          <td className="border border-gray-300 px-4 py-2">Apply to a job (candidate only)</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">GET</td>
                          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">/api/candidates/applications</td>
                          <td className="border border-gray-300 px-4 py-2">List candidate's applications (candidate only)</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">GET</td>
                          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">/api/companies/jobs/{"{id}"}/applications</td>
                          <td className="border border-gray-300 px-4 py-2">List applications for a job (company only)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Dashboard</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-blue-50">
                          <th className="border border-gray-300 px-4 py-2 text-left">Method</th>
                          <th className="border border-gray-300 px-4 py-2 text-left">Endpoint</th>
                          <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">GET</td>
                          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">/api/companies/dashboard</td>
                          <td className="border border-gray-300 px-4 py-2">Company dashboard data (job posts, applications)</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">GET</td>
                          <td className="border border-gray-300 px-4 py-2 font-mono text-sm">/api/candidates/dashboard</td>
                          <td className="border border-gray-300 px-4 py-2">Candidate dashboard data (applied jobs)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Implementation Details */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-blue-800">Implementation Details</CardTitle>
              <CardDescription>
                Technical aspects and architecture
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Database Schema</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><strong>companies</strong> - id, name, email, password, description, website, logo, created_at, updated_at</li>
                    <li><strong>candidates</strong> - id, name, email, password, phone, created_at, updated_at</li>
                    <li><strong>jobs</strong> - id, company_id, title, description, location, salary_range, is_remote, published_at, created_at, updated_at, deleted_at</li>
                    <li><strong>applications</strong> - id, job_id, candidate_id, cover_letter, resume_path, status, created_at, updated_at</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Key Laravel Features Used</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><strong>Eloquent ORM</strong> - For database interactions and relationships</li>
                    <li><strong>Form Requests</strong> - For validation and authorization</li>
                    <li><strong>API Resources</strong> - For consistent API responses</li>
                    <li><strong>Middleware</strong> - For authentication and route protection</li>
                    <li><strong>Queue Jobs</strong> - For background processing of file uploads</li>
                    <li><strong>Cache</strong> - For improving performance of job listings</li>
                    <li><strong>Soft Deletes</strong> - For non-destructive job removal</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Authentication Flow</h3>
                  <p className="mb-2">The API uses Laravel Passport to implement OAuth2 authentication:</p>
                  <ol className="list-decimal pl-5 space-y-1">
                    <li>User (Company or Candidate) registers via the appropriate endpoint</li>
                    <li>User logs in with credentials to receive an access token</li>
                    <li>The access token is included in the Authorization header for protected routes</li>
                    <li>Different middleware guards are used to protect company and candidate routes</li>
                  </ol>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Documentation Link */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-blue-800">Documentation</CardTitle>
              <CardDescription>
                API documentation and setup instructions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Setup Instructions</h3>
                  <ol className="list-decimal pl-5 space-y-1">
                    <li>Clone the repository from GitHub</li>
                    <li>Run <code className="bg-gray-100 px-2 py-1 rounded">composer install</code> to install dependencies</li>
                    <li>Copy <code className="bg-gray-100 px-2 py-1 rounded">.env.example</code> to <code className="bg-gray-100 px-2 py-1 rounded">.env</code> and configure your database</li>
                    <li>Run <code className="bg-gray-100 px-2 py-1 rounded">php artisan migrate</code> to create database tables</li>
                    <li>Run <code className="bg-gray-100 px-2 py-1 rounded">php artisan passport:install</code> to set up Passport</li>
                    <li>Start the queue worker with <code className="bg-gray-100 px-2 py-1 rounded">php artisan queue:work</code></li>
                  </ol>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">API Documentation</h3>
                  <p className="mb-4">
                    A complete Postman collection is provided with the project, containing all API endpoints with examples and authentication setup.
                  </p>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Download Postman Collection
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* GitHub Link */}
        <div className="text-center mb-12">
          <a 
            href="#" 
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
              <path d="M9 18c-4.51 2-5-2-7-2"></path>
            </svg>
            View Project on GitHub
          </a>
        </div>

        {/* Footer */}
        <footer className="text-center text-gray-500 text-sm">
          <p>© 2025 Job Board API Project</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
