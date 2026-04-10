import { useState, useEffect } from 'react';
import { FaGithub, FaMapMarkerAlt, FaLink, FaUsers, FaBook } from 'react-icons/fa';

export default function GithubProfile() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGithubProfile = async () => {
      try {
        const response = await fetch('https://api.github.com/users/fshangala', {
          headers: {
            Accept: 'application/vnd.github+json',
            'X-GitHub-Api-Version': '2026-03-10',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch GitHub profile');
        }

        const data = await response.json();
        setProfile(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGithubProfile();
  }, []);

  if (loading) {
    return (
      <section id="github" className="section-shell bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="flex animate-pulse flex-col items-center">
            <div className="mb-4 h-4 w-1/4 rounded bg-slate-200" />
            <div className="h-64 w-full max-w-2xl rounded bg-slate-200" />
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="github" className="section-shell bg-slate-50 text-center">
        <p className="text-rose-600">Error loading GitHub profile: {error}</p>
      </section>
    );
  }

  return (
    <section id="github" className="section-shell bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center animate-fade-in-up">
          <h2 className="section-title">GitHub Profile</h2>
          <div className="section-rule" />
        </div>

        <div className="card-surface mx-auto max-w-4xl overflow-hidden animate-fade-in-up">
          <div className="md:flex">
            <div className="flex flex-col items-center justify-center bg-slate-900 p-8 text-white md:w-1/3">
              <div className="mb-6 h-48 w-48 overflow-hidden rounded-full border-4 border-white shadow-lg">
                <img src={profile.avatar_url} alt={profile.login} className="h-full w-full object-cover" />
              </div>
              <h3 className="text-center text-2xl font-bold">{profile.name}</h3>
              <p className="text-slate-300">@{profile.login}</p>

              <a
                href={profile.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center rounded-full bg-white px-6 py-2 font-semibold text-slate-900 transition-colors hover:bg-slate-100"
              >
                <FaGithub className="mr-2" />
                View Profile
              </a>
            </div>

            <div className="p-8 md:w-2/3 md:p-12">
              <div className="mb-8">
                <h4 className="mb-4 text-xl font-semibold text-slate-800">Bio</h4>
                <p className="leading-relaxed text-slate-600">{profile.bio || 'No bio available.'}</p>
              </div>

              <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
                <div className="rounded-lg bg-slate-50 p-4 text-center">
                  <FaBook className="mx-auto mb-2 text-2xl text-brand-600" />
                  <span className="block text-2xl font-bold text-slate-900">{profile.public_repos}</span>
                  <span className="text-sm text-slate-500">Repositories</span>
                </div>
                <div className="rounded-lg bg-slate-50 p-4 text-center">
                  <FaUsers className="mx-auto mb-2 text-2xl text-slate-700" />
                  <span className="block text-2xl font-bold text-slate-900">{profile.followers}</span>
                  <span className="text-sm text-slate-500">Followers</span>
                </div>
                <div className="rounded-lg bg-slate-50 p-4 text-center">
                  <FaUsers className="mx-auto mb-2 text-2xl text-emerald-600" />
                  <span className="block text-2xl font-bold text-slate-900">{profile.following}</span>
                  <span className="text-sm text-slate-500">Following</span>
                </div>
              </div>

              <div className="space-y-3">
                {profile.location && (
                  <div className="flex items-center text-slate-600">
                    <FaMapMarkerAlt className="mr-3 h-5 w-5 text-slate-400" />
                    <span>{profile.location}</span>
                  </div>
                )}
                {profile.blog && (
                  <div className="flex items-center text-slate-600">
                    <FaLink className="mr-3 h-5 w-5 text-slate-400" />
                    <a
                      href={profile.blog.startsWith('http') ? profile.blog : `https://${profile.blog}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="interactive-link"
                    >
                      {profile.blog}
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
