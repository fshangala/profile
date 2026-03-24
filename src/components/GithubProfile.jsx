import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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
                        'Accept': 'application/vnd.github+json',
                        'X-GitHub-Api-Version': '2026-03-10'
                    }
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch GitHub profile');
                }

                const data = await response.json();
                setProfile(data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchGithubProfile();
    }, []);

    if (loading) {
        return (
            <section id="github" className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="animate-pulse flex flex-col items-center">
                        <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
                        <div className="h-64 bg-gray-200 rounded w-full max-w-2xl"></div>
                    </div>
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section id="github" className="py-20 bg-gray-50 text-center">
                <p className="text-red-500">Error loading GitHub profile: {error}</p>
            </section>
        );
    }

    return (
        <section id="github" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">GitHub Profile</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
                </motion.div>

                <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-4xl mx-auto">
                    <div className="md:flex">
                        <motion.div 
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="md:w-1/3 bg-gray-900 flex flex-col items-center justify-center p-8 text-white"
                        >
                            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg mb-6">
                                <img 
                                    src={profile.avatar_url} 
                                    alt={profile.login} 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-2xl font-bold text-center">{profile.name}</h3>
                            <p className="text-gray-400">@{profile.login}</p>
                            
                            <a 
                                href={profile.html_url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="mt-6 flex items-center px-6 py-2 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                            >
                                <FaGithub className="mr-2" />
                                View Profile
                            </a>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="md:w-2/3 p-8 md:p-12"
                        >
                            <div className="mb-8">
                                <h4 className="text-xl font-semibold text-gray-800 mb-4">Bio</h4>
                                <p className="text-gray-600 leading-relaxed">
                                    {profile.bio || "No bio available."}
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                                <div className="p-4 bg-gray-50 rounded-lg text-center hover:shadow-md transition-shadow">
                                    <FaBook className="text-2xl text-blue-600 mx-auto mb-2" />
                                    <span className="block text-2xl font-bold text-gray-900">{profile.public_repos}</span>
                                    <span className="text-sm text-gray-500">Repositories</span>
                                </div>
                                <div className="p-4 bg-gray-50 rounded-lg text-center hover:shadow-md transition-shadow">
                                    <FaUsers className="text-2xl text-purple-600 mx-auto mb-2" />
                                    <span className="block text-2xl font-bold text-gray-900">{profile.followers}</span>
                                    <span className="text-sm text-gray-500">Followers</span>
                                </div>
                                <div className="p-4 bg-gray-50 rounded-lg text-center hover:shadow-md transition-shadow">
                                    <FaUsers className="text-2xl text-green-600 mx-auto mb-2" />
                                    <span className="block text-2xl font-bold text-gray-900">{profile.following}</span>
                                    <span className="text-sm text-gray-500">Following</span>
                                </div>
                            </div>

                            <div className="space-y-3">
                                {profile.location && (
                                    <div className="flex items-center text-gray-600">
                                        <FaMapMarkerAlt className="w-5 h-5 mr-3 text-gray-400" />
                                        <span>{profile.location}</span>
                                    </div>
                                )}
                                {profile.blog && (
                                    <div className="flex items-center text-gray-600">
                                        <FaLink className="w-5 h-5 mr-3 text-gray-400" />
                                        <a 
                                            href={profile.blog.startsWith('http') ? profile.blog : `https://${profile.blog}`} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="hover:text-blue-600 transition-colors"
                                        >
                                            {profile.blog}
                                        </a>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
