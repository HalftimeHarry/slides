<script lang="ts">
	import { Presentation, Slide, Step, FitText } from '@components'
	import Layout from './layout.svelte'
</script>

<Presentation>
	<!-- Slide 1: Title -->
	<Slide>
		<Layout>
			<div class="flex h-full flex-col items-center justify-center gap-8">
				<h1 class="text-[120px] font-bold text-white">FLI GOLF</h1>
				<p class="text-[48px] text-gray-300">The Future of Professional Disc Golf</p>
				<div class="mt-16 text-[32px] text-gray-400">
					<p>Investor Presentation</p>
					<p class="mt-4">{new Date().getFullYear()}</p>
				</div>
			</div>
		</Layout>
	</Slide>

	<!-- Slide 2: Challenges -->
	<Slide animate>
		<Layout>
			<div class="flex h-full flex-col justify-center gap-10">
				<h2 class="text-[80px] font-bold text-white">Challenges</h2>
				
				<div class="grid grid-cols-3 gap-6 text-[28px]">
					<Step>
						<div class="rounded-lg bg-blue-900/40 p-6 border-2 border-blue-500">
							<h3 class="mb-4 text-[36px] font-bold text-blue-400">👥 Fans</h3>
							<ul class="space-y-2 text-gray-300">
								<li>• Limited live viewing options</li>
								<li>• Poor spectator experience</li>
								<li>• No stadium atmosphere</li>
								<li>• Minimal engagement tools</li>
							</ul>
						</div>
					</Step>
					
					<Step>
						<div class="rounded-lg bg-green-900/40 p-6 border-2 border-green-500">
							<h3 class="mb-4 text-[36px] font-bold text-green-400">💰 Pros</h3>
							<ul class="space-y-2 text-gray-300">
								<li>• Inconsistent prize pools</li>
								<li>• Limited earning potential</li>
								<li>• Lack of team structure</li>
								<li>• No off-season income</li>
							</ul>
						</div>
					</Step>
					
					<Step>
						<div class="rounded-lg bg-purple-900/40 p-6 border-2 border-purple-500">
							<h3 class="mb-4 text-[36px] font-bold text-purple-400">📈 Sponsors</h3>
							<ul class="space-y-2 text-gray-300">
								<li>• Hard to measure ROI</li>
								<li>• Limited inventory</li>
								<li>• Fragmented audience</li>
								<li>• No guaranteed exposure</li>
							</ul>
						</div>
					</Step>
				</div>

				<div class="grid grid-cols-2 gap-6 text-[28px]">
					<Step>
						<div class="rounded-lg bg-orange-900/40 p-6 border-2 border-orange-500">
							<h3 class="mb-3 text-[36px] font-bold text-orange-400">🎲 Wagering</h3>
							<p class="text-gray-300">Extensive player and tournament statistics make disc golf a viable betting market with clear lines and real-time analytics.</p>
						</div>
					</Step>
					
					<Step>
						<div class="rounded-lg bg-teal-900/40 p-6 border-2 border-teal-500">
							<h3 class="mb-3 text-[36px] font-bold text-teal-400">📺 Coverage</h3>
							<p class="text-gray-300">Professional production with active players like Kona Montgomery bringing expert analysis and insider perspectives.</p>
						</div>
					</Step>
				</div>
			</div>
		</Layout>
	</Slide>

	<!-- Slide 3: The Solution -->
	<Slide animate>
		<Layout>
			<div class="flex h-full flex-col justify-center gap-10">
				<h2 class="text-[80px] font-bold text-white">Solution</h2>
				
				<div class="grid grid-cols-2 gap-6">
					<div class="space-y-4">
						<Step>
							<div class="rounded-lg bg-blue-900/40 p-6 border-2 border-blue-500">
								<h3 class="text-[36px] font-bold text-blue-400 mb-3">🏟️ Arena Events</h3>
								<ul class="space-y-2 text-[28px] text-gray-300">
									<li>✓ Purpose-built stadium courses</li>
									<li>✓ 5,000+ seat capacity</li>
									<li>✓ Premium viewing angles</li>
									<li>✓ Weather-protected venues</li>
								</ul>
							</div>
						</Step>
						
						<Step>
							<div class="rounded-lg bg-purple-900/40 p-6 border-2 border-purple-500">
								<h3 class="text-[36px] font-bold text-purple-400 mb-3">📺 Broadcast Production</h3>
								<ul class="space-y-2 text-[28px] text-gray-300">
									<li>✓ Multi-camera coverage</li>
									<li>✓ Real-time stats overlay</li>
									<li>✓ Drone footage</li>
									<li>✓ Professional commentary</li>
								</ul>
							</div>
						</Step>
					</div>
					
					<div class="space-y-4">
						<Step>
							<div class="rounded-lg bg-green-900/40 p-6 border-2 border-green-500">
								<h3 class="text-[36px] font-bold text-green-400 mb-3">👥 Team Structure</h3>
								<ul class="space-y-2 text-[28px] text-gray-300">
									<li>✓ 12 franchise teams</li>
									<li>✓ Draft system for players</li>
									<li>✓ Team branding & merchandise</li>
									<li>✓ Home/away format</li>
								</ul>
							</div>
						</Step>
						
						<Step>
							<div class="rounded-lg bg-orange-900/40 p-6 border-2 border-orange-500">
								<h3 class="text-[36px] font-bold text-orange-400 mb-3">🎮 Fan Engagement</h3>
								<ul class="space-y-2 text-[28px] text-gray-300">
									<li>✓ Fantasy league platform</li>
									<li>✓ Live betting integration</li>
									<li>✓ Mobile app experience</li>
									<li>✓ Social media activation</li>
								</ul>
							</div>
						</Step>
					</div>
				</div>
			</div>
		</Layout>
	</Slide>

	<!-- Slide 4: What Makes FLI Different -->
	<Slide animate>
		<Layout>
			<div class="flex h-full flex-col justify-center gap-12">
				<h2 class="text-[80px] font-bold text-white">What Makes FLI Different</h2>
				<div class="grid grid-cols-2 gap-8 text-[32px]">
					<Step>
						<div class="rounded-lg bg-gray-800 p-8">
							<h3 class="mb-4 text-[40px] font-bold text-blue-400">Media-First</h3>
							<p class="text-gray-300">Built for streaming and broadcast from day one</p>
						</div>
					</Step>
					<Step>
						<div class="rounded-lg bg-gray-800 p-8">
							<h3 class="mb-4 text-[40px] font-bold text-green-400">Betting-Integrated</h3>
							<p class="text-gray-300">Clear lines, real-time odds, FanDuel partnership</p>
						</div>
					</Step>
					<Step>
						<div class="rounded-lg bg-gray-800 p-8">
							<h3 class="mb-4 text-[40px] font-bold text-purple-400">Gender-Equal</h3>
							<p class="text-gray-300">Equal prize pools, equal coverage, equal opportunity</p>
						</div>
					</Step>
					<Step>
						<div class="rounded-lg bg-gray-800 p-8">
							<h3 class="mb-4 text-[40px] font-bold text-orange-400">Data-Driven</h3>
							<p class="text-gray-300">Real-time stats, analytics, and fan engagement</p>
						</div>
					</Step>
				</div>
			</div>
		</Layout>
	</Slide>

	<!-- Slide 5: Market Opportunity -->
	<Slide animate>
		<Layout>
			<div class="flex h-full flex-col justify-center gap-10">
				<h2 class="text-[80px] font-bold text-white">Market Opportunity</h2>
				
				<div class="grid grid-cols-2 gap-8">
					<Step>
						<div class="rounded-lg bg-blue-900/40 p-8 border-2 border-blue-500">
							<h3 class="text-[40px] font-bold text-blue-400 mb-6">📊 Market Size</h3>
							<div class="space-y-4 text-[32px] text-gray-300">
								<p>• <span class="font-bold text-white">4.5M</span> active disc golfers in US</p>
								<p>• <span class="font-bold text-white">$50M+</span> annual equipment sales</p>
								<p>• <span class="font-bold text-white">Growing 15%</span> year-over-year</p>
								<p>• <span class="font-bold text-white">35</span> average age demographic</p>
							</div>
							
							<div class="mt-6 pt-6 border-t border-blue-700">
								<h4 class="text-[32px] font-bold text-blue-300 mb-3">Comparable Markets</h4>
								<div class="space-y-2 text-[28px] text-gray-300">
									<p>Pickleball: <span class="font-bold text-blue-400">$1.5B</span></p>
									<p>Cornhole: <span class="font-bold text-blue-400">$500M+</span></p>
									<p>Esports: <span class="font-bold text-blue-400">$1.8B</span></p>
								</div>
							</div>
						</div>
					</Step>
					
					<Step>
						<div class="rounded-lg bg-green-900/40 p-8 border-2 border-green-500">
							<h3 class="text-[40px] font-bold text-green-400 mb-6">📈 Growth Trend (2019-2024)</h3>
							
							<div class="space-y-4 mb-8">
								<div>
									<div class="flex justify-between text-[24px] mb-2">
										<span class="text-gray-400">2019</span>
										<span class="font-bold text-white">2.5M</span>
									</div>
									<div class="bg-gray-700 rounded-full h-4">
										<div class="bg-gradient-to-r from-green-400 to-green-600 h-full rounded-full" style="width: 50%"></div>
									</div>
								</div>
								
								<div>
									<div class="flex justify-between text-[24px] mb-2">
										<span class="text-gray-400">2020</span>
										<span class="font-bold text-white">3.2M</span>
									</div>
									<div class="bg-gray-700 rounded-full h-4">
										<div class="bg-gradient-to-r from-green-400 to-green-600 h-full rounded-full" style="width: 64%"></div>
									</div>
								</div>
								
								<div>
									<div class="flex justify-between text-[24px] mb-2">
										<span class="text-gray-400">2021</span>
										<span class="font-bold text-white">3.8M</span>
									</div>
									<div class="bg-gray-700 rounded-full h-4">
										<div class="bg-gradient-to-r from-green-400 to-green-600 h-full rounded-full" style="width: 76%"></div>
									</div>
								</div>
								
								<div>
									<div class="flex justify-between text-[24px] mb-2">
										<span class="text-gray-400">2022</span>
										<span class="font-bold text-white">4.1M</span>
									</div>
									<div class="bg-gray-700 rounded-full h-4">
										<div class="bg-gradient-to-r from-green-400 to-green-600 h-full rounded-full" style="width: 82%"></div>
									</div>
								</div>
								
								<div>
									<div class="flex justify-between text-[24px] mb-2">
										<span class="text-gray-400">2023</span>
										<span class="font-bold text-white">4.5M</span>
									</div>
									<div class="bg-gray-700 rounded-full h-4">
										<div class="bg-gradient-to-r from-green-400 to-green-600 h-full rounded-full" style="width: 90%"></div>
									</div>
								</div>
							</div>
							
							<div class="pt-6 border-t border-green-700">
								<h4 class="text-[32px] font-bold text-green-300 mb-3">Key Trends</h4>
								<div class="space-y-2 text-[28px] text-gray-300">
									<p>📈 Post-pandemic surge</p>
									<p>👥 Younger demographics</p>
									<p>📱 Digital engagement rising</p>
								</div>
							</div>
						</div>
					</Step>
				</div>
			</div>
		</Layout>
	</Slide>

	<!-- Slide 6: The Experience -->
	<Slide animate>
		<Layout>
			<div class="flex h-full flex-col justify-center gap-12">
				<h2 class="text-[80px] font-bold text-white">The FLI Experience</h2>
				<div class="space-y-6 text-[36px] text-gray-300">
					<Step>
						<p>🎯 <span class="font-semibold text-white">Iconic Venues</span> - Rooftops, stadiums, landmarks</p>
					</Step>
					<Step>
						<p>⚡ <span class="font-semibold text-white">Fast-Paced Action</span> - Par 3 format, constant excitement</p>
					</Step>
					<Step>
						<p>📊 <span class="font-semibold text-white">Real-Time Data</span> - Live stats, shot tracking, analytics</p>
					</Step>
					<Step>
						<p>💰 <span class="font-semibold text-white">Betting Integration</span> - In-game wagering, clear odds</p>
					</Step>
					<Step>
						<p>🌟 <span class="font-semibold text-white">Top Athletes</span> - World's best players, equal representation</p>
					</Step>
					<Step>
						<p>📱 <span class="font-semibold text-white">Multi-Platform</span> - In-person, streaming, social media</p>
					</Step>
				</div>
			</div>
		</Layout>
	</Slide>

	<!-- Slide 7: Business Model -->
	<Slide animate>
		<Layout>
			<div class="flex h-full flex-col justify-center gap-12">
				<h2 class="text-[80px] font-bold text-white">Business Model</h2>
				<div class="grid grid-cols-2 gap-8 text-[32px]">
					<Step>
						<div class="rounded-lg bg-blue-900/30 p-8">
							<h3 class="mb-4 text-[40px] font-bold text-blue-400">Revenue Streams</h3>
							<ul class="space-y-3 text-gray-300">
								<li>• Media rights & streaming</li>
								<li>• Sponsorships & partnerships</li>
								<li>• Betting platform revenue share</li>
								<li>• Ticket sales & hospitality</li>
								<li>• Merchandise & licensing</li>
							</ul>
						</div>
					</Step>
					<Step>
						<div class="rounded-lg bg-green-900/30 p-8">
							<h3 class="mb-4 text-[40px] font-bold text-green-400">Key Partnerships</h3>
							<ul class="space-y-3 text-gray-300">
								<li>• FanDuel (betting integration)</li>
								<li>• Streaming platforms</li>
								<li>• Venue partners</li>
								<li>• Equipment sponsors</li>
								<li>• Brand advertisers</li>
							</ul>
						</div>
					</Step>
				</div>
			</div>
		</Layout>
	</Slide>

	<!-- Slide 8: Traction -->
	<Slide animate>
		<Layout>
			<div class="flex h-full flex-col justify-center gap-12">
				<h2 class="text-[80px] font-bold text-white">Traction & Milestones</h2>
				<div class="space-y-8 text-[40px] text-gray-300">
					<Step>
						<p>📝 <span class="font-semibold text-white">[Add key milestones achieved]</span></p>
					</Step>
					<Step>
						<p>👥 <span class="font-semibold text-white">[Player commitments]</span></p>
					</Step>
					<Step>
						<p>🤝 <span class="font-semibold text-white">[Partnership agreements]</span></p>
					</Step>
					<Step>
						<p>📺 <span class="font-semibold text-white">[Media coverage/interest]</span></p>
					</Step>
					<Step>
						<p>💵 <span class="font-semibold text-white">[Revenue to date]</span></p>
					</Step>
				</div>
			</div>
		</Layout>
	</Slide>

	<!-- Slide 9: Competition -->
	<Slide animate>
		<Layout>
			<div class="flex h-full flex-col justify-center gap-12">
				<h2 class="text-[80px] font-bold text-white">Competitive Landscape</h2>
				<div class="space-y-8 text-[36px] text-gray-300">
					<Step>
						<div>
							<p class="font-semibold text-white">Traditional Disc Golf Tours</p>
							<p class="text-[32px]">PDGA, DGPT - Long courses, limited broadcast appeal</p>
						</div>
					</Step>
					<Step>
						<div>
							<p class="font-semibold text-white">Other Alternative Sports Leagues</p>
							<p class="text-[32px]">Lessons from LIV Golf, Premier Lacrosse League</p>
						</div>
					</Step>
					<Step>
						<div class="mt-8 rounded-lg bg-green-900/30 p-8">
							<p class="font-semibold text-white">FLI's Advantage</p>
							<p class="text-[32px]">Only media-first, betting-integrated, gender-equal disc golf league</p>
						</div>
					</Step>
				</div>
			</div>
		</Layout>
	</Slide>

	<!-- Slide 10: Growth Strategy -->
	<Slide animate>
		<Layout>
			<div class="flex h-full flex-col justify-center gap-10">
				<h2 class="text-[80px] font-bold text-white">📈 Growth Strategy</h2>
				
				<div class="grid grid-cols-2 gap-8 text-[32px]">
					<div class="space-y-6">
						<Step>
							<div class="rounded-lg bg-blue-900/40 p-6 border-2 border-blue-500">
								<h3 class="text-[40px] font-bold text-blue-400 mb-4">Phase 1: Launch (Year 1)</h3>
								<ul class="space-y-2 text-gray-300">
									<li>• 4 events, 8 teams</li>
									<li>• 2 stadium venues</li>
									<li>• 50K live attendees</li>
									<li>• Streaming partnership</li>
								</ul>
							</div>
						</Step>
						
						<Step>
							<div class="rounded-lg bg-green-900/40 p-6 border-2 border-green-500">
								<h3 class="text-[40px] font-bold text-green-400 mb-4">Phase 2: Expansion (Year 2)</h3>
								<ul class="space-y-2 text-gray-300">
									<li>• 8 events, 12 teams</li>
									<li>• 4 stadium venues</li>
									<li>• 120K live attendees</li>
									<li>• Cable TV deal</li>
								</ul>
							</div>
						</Step>
					</div>
					
					<Step>
						<div class="rounded-lg bg-purple-900/40 p-6 border-2 border-purple-500">
							<h3 class="text-[40px] font-bold text-purple-400 mb-4">Phase 3: Scale (Year 3)</h3>
							<ul class="space-y-2 text-gray-300 mb-6">
								<li>• 12 events, 16 teams</li>
								<li>• 6 stadium venues</li>
								<li>• 200K+ live attendees</li>
								<li>• International expansion</li>
							</ul>
							
							<div class="mt-8 p-6 bg-gray-800/50 rounded-lg">
								<p class="text-[28px] font-bold text-white mb-3">Event Growth</p>
								<div class="space-y-3">
									<div class="flex items-center gap-4">
										<span class="text-gray-400 w-16">Y1</span>
										<div class="flex-1 bg-gray-700 rounded-full h-3">
											<div class="bg-gradient-to-r from-blue-500 to-blue-600 h-full rounded-full" style="width: 25%"></div>
										</div>
										<span class="text-white w-16">4</span>
									</div>
									<div class="flex items-center gap-4">
										<span class="text-gray-400 w-16">Y2</span>
										<div class="flex-1 bg-gray-700 rounded-full h-3">
											<div class="bg-gradient-to-r from-green-500 to-green-600 h-full rounded-full" style="width: 50%"></div>
										</div>
										<span class="text-white w-16">8</span>
									</div>
									<div class="flex items-center gap-4">
										<span class="text-gray-400 w-16">Y3</span>
										<div class="flex-1 bg-gray-700 rounded-full h-3">
											<div class="bg-gradient-to-r from-purple-500 to-purple-600 h-full rounded-full" style="width: 75%"></div>
										</div>
										<span class="text-white w-16">12</span>
									</div>
									<div class="flex items-center gap-4">
										<span class="text-gray-400 w-16">Y4</span>
										<div class="flex-1 bg-gray-700 rounded-full h-3">
											<div class="bg-gradient-to-r from-orange-500 to-orange-600 h-full rounded-full" style="width: 100%"></div>
										</div>
										<span class="text-white w-16">16</span>
									</div>
								</div>
							</div>
						</div>
					</Step>
				</div>
			</div>
		</Layout>
	</Slide>

	<!-- Slide 11: Teams & Pros -->
	<Slide animate>
		<Layout>
			<div class="flex h-full flex-col justify-center gap-10">
				<h2 class="text-[80px] font-bold text-white">🏆 Teams & Pros</h2>
				
				<div class="grid grid-cols-2 gap-8 text-[32px]">
					<div class="space-y-6">
						<Step>
							<div class="rounded-lg bg-blue-900/40 p-6 border-2 border-blue-500">
								<h3 class="text-[40px] font-bold text-blue-400 mb-4">Team Structure</h3>
								<ul class="space-y-2 text-gray-300">
									<li>• <span class="font-bold text-white">12 founding franchises</span></li>
									<li>• 6-8 players per team</li>
									<li>• Salary cap: $500K per team</li>
									<li>• Revenue sharing model</li>
								</ul>
							</div>
						</Step>
						
						<Step>
							<div class="rounded-lg bg-green-900/40 p-6 border-2 border-green-500">
								<h3 class="text-[40px] font-bold text-green-400 mb-4">Player Benefits</h3>
								<ul class="space-y-2 text-gray-300">
									<li>• Guaranteed contracts</li>
									<li>• Health insurance</li>
									<li>• Performance bonuses</li>
									<li>• Merchandise royalties</li>
								</ul>
							</div>
						</Step>
					</div>
					
					<div class="space-y-6">
						<Step>
							<div class="rounded-lg bg-purple-900/40 p-6 border-2 border-purple-500">
								<h3 class="text-[40px] font-bold text-purple-400 mb-4">Pro Roster (Target)</h3>
								<ul class="space-y-2 text-gray-300">
									<li>• Top 50 PDGA-rated players</li>
									<li>• Mix of veterans & rookies</li>
									<li>• International representation</li>
									<li>• Content creator integration</li>
								</ul>
							</div>
						</Step>
						
						<Step>
							<div class="rounded-lg bg-orange-900/40 p-6 border-2 border-orange-500">
								<h3 class="text-[40px] font-bold text-orange-400 mb-4">Compensation Mix</h3>
								<div class="space-y-3 text-gray-300">
									<div class="flex justify-between">
										<span>Base Salary</span>
										<span class="font-bold text-white">50%</span>
									</div>
									<div class="flex justify-between">
										<span>Performance Bonus</span>
										<span class="font-bold text-white">25%</span>
									</div>
									<div class="flex justify-between">
										<span>Merchandise</span>
										<span class="font-bold text-white">15%</span>
									</div>
									<div class="flex justify-between">
										<span>Sponsorships</span>
										<span class="font-bold text-white">10%</span>
									</div>
								</div>
							</div>
						</Step>
					</div>
				</div>
			</div>
		</Layout>
	</Slide>

	<!-- Slide 12: The 12 Teams -->
	<Slide>
		<Layout>
			<div class="flex h-full flex-col justify-center gap-8">
				<h2 class="text-[80px] font-bold text-white text-center">🛡️ The 12 Teams</h2>
				
				<div class="grid grid-cols-6 gap-6 text-center text-[24px]">
					<div>
						<div class="w-32 h-32 mx-auto mb-3 rounded-lg bg-gray-800 flex items-center justify-center text-[48px]">🎯</div>
						<p class="text-gray-300">Ace Makers</p>
					</div>
					<div>
						<div class="w-32 h-32 mx-auto mb-3 rounded-lg bg-gray-800 flex items-center justify-center text-[48px]">⛈️</div>
						<p class="text-gray-300">Birdie Storm</p>
					</div>
					<div>
						<div class="w-32 h-32 mx-auto mb-3 rounded-lg bg-gray-800 flex items-center justify-center text-[48px]">⛓️</div>
						<p class="text-gray-300">Chain Breakers</p>
					</div>
					<div>
						<div class="w-32 h-32 mx-auto mb-3 rounded-lg bg-gray-800 flex items-center justify-center text-[48px]">🔍</div>
						<p class="text-gray-300">Chain Seekers</p>
					</div>
					<div>
						<div class="w-32 h-32 mx-auto mb-3 rounded-lg bg-gray-800 flex items-center justify-center text-[48px]">👑</div>
						<p class="text-gray-300">Disc Dynasty</p>
					</div>
					<div>
						<div class="w-32 h-32 mx-auto mb-3 rounded-lg bg-gray-800 flex items-center justify-center text-[48px]">🃏</div>
						<p class="text-gray-300">Disk Jesters</p>
					</div>
					<div>
						<div class="w-32 h-32 mx-auto mb-3 rounded-lg bg-gray-800 flex items-center justify-center text-[48px]">💣</div>
						<p class="text-gray-300">Fairway Bombers</p>
					</div>
					<div>
						<div class="w-32 h-32 mx-auto mb-3 rounded-lg bg-gray-800 flex items-center justify-center text-[48px]">✈️</div>
						<p class="text-gray-300">Flight Squad</p>
					</div>
					<div>
						<div class="w-32 h-32 mx-auto mb-3 rounded-lg bg-gray-800 flex items-center justify-center text-[48px]">🎨</div>
						<p class="text-gray-300">Glide Masters</p>
					</div>
					<div>
						<div class="w-32 h-32 mx-auto mb-3 rounded-lg bg-gray-800 flex items-center justify-center text-[48px]">🎪</div>
						<p class="text-gray-300">Huk-A-Mania</p>
					</div>
					<div>
						<div class="w-32 h-32 mx-auto mb-3 rounded-lg bg-gray-800 flex items-center justify-center text-[48px]">🦸</div>
						<p class="text-gray-300">Hyzer Heroes</p>
					</div>
					<div>
						<div class="w-32 h-32 mx-auto mb-3 rounded-lg bg-gray-800 flex items-center justify-center text-[48px]">✨</div>
						<p class="text-gray-300">Midas Touch</p>
					</div>
				</div>
				
				<p class="text-center text-[28px] text-gray-400 mt-4">
					📸 Team logos will be displayed here once images are uploaded
				</p>
			</div>
		</Layout>
	</Slide>

	<!-- Slide 13: Revenue Model -->
	<Slide animate>
		<Layout>
			<div class="flex h-full flex-col justify-center gap-10">
				<h2 class="text-[80px] font-bold text-white">💵 Revenue Model</h2>
				
				<div class="grid grid-cols-2 gap-8 text-[32px]">
					<div class="space-y-6">
						<Step>
							<div class="rounded-lg bg-blue-900/40 p-6 border-2 border-blue-500">
								<h3 class="text-[40px] font-bold text-blue-400 mb-4">Ticket Sales (30%)</h3>
								<ul class="space-y-2 text-gray-300">
									<li>• Premium seating</li>
									<li>• General admission</li>
									<li>• VIP experiences</li>
								</ul>
							</div>
						</Step>
						
						<Step>
							<div class="rounded-lg bg-green-900/40 p-6 border-2 border-green-500">
								<h3 class="text-[40px] font-bold text-green-400 mb-4">Sponsorships (40%)</h3>
								<ul class="space-y-2 text-gray-300">
									<li>• Title sponsors</li>
									<li>• Team sponsors</li>
									<li>• Venue naming rights</li>
								</ul>
							</div>
						</Step>
					</div>
					
					<div class="space-y-6">
						<Step>
							<div class="rounded-lg bg-purple-900/40 p-6 border-2 border-purple-500">
								<h3 class="text-[40px] font-bold text-purple-400 mb-4">Media Rights (20%)</h3>
								<ul class="space-y-2 text-gray-300">
									<li>• Streaming platforms</li>
									<li>• Cable TV deals</li>
									<li>• International rights</li>
								</ul>
							</div>
						</Step>
						
						<Step>
							<div class="rounded-lg bg-orange-900/40 p-6 border-2 border-orange-500">
								<h3 class="text-[40px] font-bold text-orange-400 mb-4">Merchandise (10%)</h3>
								<ul class="space-y-2 text-gray-300">
									<li>• Team apparel</li>
									<li>• League merchandise</li>
									<li>• Digital collectibles</li>
								</ul>
							</div>
						</Step>
					</div>
				</div>
			</div>
		</Layout>
	</Slide>

	<!-- Slide 14: Financial Projections -->
	<Slide animate>
		<Layout>
			<div class="flex h-full flex-col justify-center gap-10">
				<h2 class="text-[80px] font-bold text-white">📊 Financial Projections</h2>
				
				<div class="grid grid-cols-2 gap-8">
					<Step>
						<div class="rounded-lg bg-gray-800/60 p-8 border-2 border-gray-600">
							<h3 class="text-[40px] font-bold text-white mb-6">3-Year Revenue Forecast</h3>
							<table class="w-full text-[28px]">
								<thead>
									<tr class="border-b-2 border-gray-600">
										<th class="text-left py-3 text-gray-400">Year</th>
										<th class="text-right py-3 text-gray-400">Revenue</th>
										<th class="text-right py-3 text-gray-400">Expenses</th>
										<th class="text-right py-3 text-gray-400">EBITDA</th>
									</tr>
								</thead>
								<tbody class="text-gray-300">
									<tr class="border-b border-gray-700">
										<td class="py-3">Y1</td>
										<td class="text-right text-green-400">$2.5M</td>
										<td class="text-right text-red-400">$3.2M</td>
										<td class="text-right text-red-400">-$700K</td>
									</tr>
									<tr class="border-b border-gray-700">
										<td class="py-3">Y2</td>
										<td class="text-right text-green-400">$6.8M</td>
										<td class="text-right text-red-400">$5.5M</td>
										<td class="text-right text-green-400">$1.3M</td>
									</tr>
									<tr>
										<td class="py-3">Y3</td>
										<td class="text-right text-green-400">$12.5M</td>
										<td class="text-right text-red-400">$8.2M</td>
										<td class="text-right text-green-400">$4.3M</td>
									</tr>
								</tbody>
							</table>
							
							<div class="mt-6 space-y-2 text-[24px] text-gray-400">
								<p>• Break-even: Month 18</p>
								<p>• Gross margin: 45% by Y3</p>
								<p>• CAC payback: 8 months</p>
							</div>
						</div>
					</Step>
					
					<Step>
						<div class="space-y-6">
							<div class="rounded-lg bg-blue-900/40 p-6 border-2 border-blue-500">
								<h3 class="text-[36px] font-bold text-blue-400 mb-4">Revenue Growth</h3>
								<div class="space-y-4">
									<div class="flex items-center gap-4">
										<span class="text-gray-400 w-12 text-[24px]">Y1</span>
										<div class="flex-1 bg-gray-700 rounded-full h-4">
											<div class="bg-gradient-to-r from-blue-500 to-blue-600 h-full rounded-full" style="width: 20%"></div>
										</div>
										<span class="text-white w-20 text-[24px]">$2.5M</span>
									</div>
									<div class="flex items-center gap-4">
										<span class="text-gray-400 w-12 text-[24px]">Y2</span>
										<div class="flex-1 bg-gray-700 rounded-full h-4">
											<div class="bg-gradient-to-r from-green-500 to-green-600 h-full rounded-full" style="width: 54%"></div>
										</div>
										<span class="text-white w-20 text-[24px]">$6.8M</span>
									</div>
									<div class="flex items-center gap-4">
										<span class="text-gray-400 w-12 text-[24px]">Y3</span>
										<div class="flex-1 bg-gray-700 rounded-full h-4">
											<div class="bg-gradient-to-r from-purple-500 to-purple-600 h-full rounded-full" style="width: 100%"></div>
										</div>
										<span class="text-white w-20 text-[24px]">$12.5M</span>
									</div>
									<div class="flex items-center gap-4">
										<span class="text-gray-400 w-12 text-[24px]">Y4</span>
										<div class="flex-1 bg-gray-700 rounded-full h-4">
											<div class="bg-gradient-to-r from-orange-500 to-orange-600 h-full rounded-full" style="width: 145%"></div>
										</div>
										<span class="text-white w-20 text-[24px]">$18.2M</span>
									</div>
									<div class="flex items-center gap-4">
										<span class="text-gray-400 w-12 text-[24px]">Y5</span>
										<div class="flex-1 bg-gray-700 rounded-full h-4">
											<div class="bg-gradient-to-r from-red-500 to-red-600 h-full rounded-full" style="width: 192%"></div>
										</div>
										<span class="text-white w-20 text-[24px]">$24.0M</span>
									</div>
								</div>
							</div>
							
							<div class="rounded-lg bg-green-900/40 p-6 border-2 border-green-500">
								<h3 class="text-[36px] font-bold text-green-400 mb-4">Unit Economics</h3>
								<div class="space-y-2 text-[28px] text-gray-300">
									<p>• Avg ticket price: <span class="font-bold text-white">$45</span></p>
									<p>• Cost per attendee: <span class="font-bold text-white">$18</span></p>
									<p>• Contribution margin: <span class="font-bold text-white">60%</span></p>
								</div>
							</div>
						</div>
					</Step>
				</div>
			</div>
		</Layout>
	</Slide>

	<!-- Slide 15: Use of Funds -->
	<Slide animate>
		<Layout>
			<div class="flex h-full flex-col justify-center gap-10">
				<h2 class="text-[80px] font-bold text-white">💰 Use of Funds</h2>
				
				<div class="grid grid-cols-2 gap-8">
					<Step>
						<div class="rounded-lg bg-gray-800/60 p-8 border-2 border-gray-600">
							<h3 class="text-[48px] font-bold text-center mb-4">
								<span class="text-gray-400">Funding Ask:</span>
								<span class="block text-green-400 mt-2">$2.5M Pre-Seed</span>
							</h3>
							
							<div class="mt-8 space-y-4">
								<div>
									<div class="flex justify-between text-[28px] mb-2">
										<span class="text-gray-300">Venue & Production</span>
										<span class="font-bold text-white">40%</span>
									</div>
									<div class="bg-gray-700 rounded-full h-4">
										<div class="bg-gradient-to-r from-blue-500 to-blue-600 h-full rounded-full" style="width: 40%"></div>
									</div>
								</div>
								
								<div>
									<div class="flex justify-between text-[28px] mb-2">
										<span class="text-gray-300">Team Operations</span>
										<span class="font-bold text-white">25%</span>
									</div>
									<div class="bg-gray-700 rounded-full h-4">
										<div class="bg-gradient-to-r from-green-500 to-green-600 h-full rounded-full" style="width: 25%"></div>
									</div>
								</div>
								
								<div>
									<div class="flex justify-between text-[28px] mb-2">
										<span class="text-gray-300">Marketing</span>
										<span class="font-bold text-white">20%</span>
									</div>
									<div class="bg-gray-700 rounded-full h-4">
										<div class="bg-gradient-to-r from-purple-500 to-purple-600 h-full rounded-full" style="width: 20%"></div>
									</div>
								</div>
								
								<div>
									<div class="flex justify-between text-[28px] mb-2">
										<span class="text-gray-300">Technology</span>
										<span class="font-bold text-white">10%</span>
									</div>
									<div class="bg-gray-700 rounded-full h-4">
										<div class="bg-gradient-to-r from-orange-500 to-orange-600 h-full rounded-full" style="width: 10%"></div>
									</div>
								</div>
								
								<div>
									<div class="flex justify-between text-[28px] mb-2">
										<span class="text-gray-300">Working Capital</span>
										<span class="font-bold text-white">5%</span>
									</div>
									<div class="bg-gray-700 rounded-full h-4">
										<div class="bg-gradient-to-r from-red-500 to-red-600 h-full rounded-full" style="width: 5%"></div>
									</div>
								</div>
							</div>
						</div>
					</Step>
					
					<Step>
						<div class="space-y-4 text-[28px]">
							<div class="rounded-lg bg-blue-900/40 p-6 border-2 border-blue-500">
								<h4 class="text-[32px] font-bold text-blue-400 mb-3">Venue & Production ($1.0M)</h4>
								<ul class="space-y-2 text-gray-300">
									<li>• Stadium build-out</li>
									<li>• Equipment & cameras</li>
									<li>• Production crew</li>
								</ul>
							</div>
							
							<div class="rounded-lg bg-green-900/40 p-6 border-2 border-green-500">
								<h4 class="text-[32px] font-bold text-green-400 mb-3">Team Operations ($625K)</h4>
								<ul class="space-y-2 text-gray-300">
									<li>• Player contracts</li>
									<li>• Staff salaries</li>
									<li>• Travel & logistics</li>
								</ul>
							</div>
							
							<div class="rounded-lg bg-purple-900/40 p-6 border-2 border-purple-500">
								<h4 class="text-[32px] font-bold text-purple-400 mb-3">Marketing ($500K)</h4>
								<ul class="space-y-2 text-gray-300">
									<li>• Brand launch</li>
									<li>• Digital advertising</li>
									<li>• PR & events</li>
								</ul>
							</div>
							
							<div class="rounded-lg bg-orange-900/40 p-6 border-2 border-orange-500">
								<h4 class="text-[32px] font-bold text-orange-400 mb-3">Technology ($250K)</h4>
								<ul class="space-y-2 text-gray-300">
									<li>• App development</li>
									<li>• Fantasy platform</li>
									<li>• Streaming infrastructure</li>
								</ul>
							</div>
						</div>
					</Step>
				</div>
			</div>
		</Layout>
	</Slide>

	<!-- Slide 16: Milestones -->
	<Slide animate>
		<Layout>
			<div class="flex h-full flex-col justify-center gap-10">
				<h2 class="text-[80px] font-bold text-white">🎯 Milestones</h2>
				
				<div class="grid grid-cols-2 gap-8 text-[28px]">
					<div class="space-y-6">
						<Step>
							<div class="rounded-lg bg-blue-900/40 p-6 border-2 border-blue-500">
								<h3 class="text-[36px] font-bold text-blue-400 mb-4">Q1 2025</h3>
								<ul class="space-y-2 text-gray-300">
									<li>✅ Secure first venue</li>
									<li>✅ Sign 4 founding teams</li>
									<li>✅ Launch brand identity</li>
									<li>✅ Begin player recruitment</li>
								</ul>
							</div>
						</Step>
						
						<Step>
							<div class="rounded-lg bg-green-900/40 p-6 border-2 border-green-500">
								<h3 class="text-[36px] font-bold text-green-400 mb-4">Q2 2025</h3>
								<ul class="space-y-2 text-gray-300">
									<li>⭕ Complete team rosters</li>
									<li>⭕ Finalize broadcast deal</li>
									<li>⭕ Launch ticket sales</li>
									<li>⭕ Beta test fantasy app</li>
								</ul>
							</div>
						</Step>
					</div>
					
					<div class="space-y-6">
						<Step>
							<div class="rounded-lg bg-purple-900/40 p-6 border-2 border-purple-500">
								<h3 class="text-[36px] font-bold text-purple-400 mb-4">Q3 2025</h3>
								<ul class="space-y-2 text-gray-300">
									<li>⭕ Host inaugural event</li>
									<li>⭕ 10K+ attendees</li>
									<li>⭕ 100K+ stream viewers</li>
									<li>⭕ Launch merchandise</li>
								</ul>
							</div>
						</Step>
						
						<Step>
							<div class="rounded-lg bg-orange-900/40 p-6 border-2 border-orange-500">
								<h3 class="text-[36px] font-bold text-orange-400 mb-4">Q4 2025</h3>
								<ul class="space-y-2 text-gray-300">
									<li>⭕ Complete 4-event season</li>
									<li>⭕ Announce expansion teams</li>
									<li>⭕ Secure Series A funding</li>
									<li>⭕ Plan international events</li>
								</ul>
							</div>
						</Step>
					</div>
				</div>
			</div>
		</Layout>
	</Slide>

	<!-- Slide 17: Risk Mitigation -->
	<Slide animate>
		<Layout>
			<div class="flex h-full flex-col justify-center gap-10">
				<h2 class="text-[80px] font-bold text-white">🛡️ Risk Mitigation</h2>
				
				<div class="grid grid-cols-2 gap-8 text-[32px]">
					<div class="space-y-6">
						<Step>
							<div class="rounded-lg bg-red-900/40 p-6 border-2 border-red-500">
								<h3 class="text-[36px] font-bold text-red-400 mb-3">Market Risk</h3>
								<p class="text-gray-300 mb-2">• Mitigation: Pre-sales validation</p>
								<p class="text-gray-300">• Contingency: Pivot to digital-first</p>
							</div>
						</Step>
						
						<Step>
							<div class="rounded-lg bg-orange-900/40 p-6 border-2 border-orange-500">
								<h3 class="text-[36px] font-bold text-orange-400 mb-3">Operational Risk</h3>
								<p class="text-gray-300 mb-2">• Mitigation: Experienced team</p>
								<p class="text-gray-300">• Contingency: Outsource production</p>
							</div>
						</Step>
					</div>
					
					<div class="space-y-6">
						<Step>
							<div class="rounded-lg bg-purple-900/40 p-6 border-2 border-purple-500">
								<h3 class="text-[36px] font-bold text-purple-400 mb-3">Competition Risk</h3>
								<p class="text-gray-300 mb-2">• Mitigation: First-mover advantage</p>
								<p class="text-gray-300">• Contingency: Strategic partnerships</p>
							</div>
						</Step>
						
						<Step>
							<div class="rounded-lg bg-blue-900/40 p-6 border-2 border-blue-500">
								<h3 class="text-[36px] font-bold text-blue-400 mb-3">Financial Risk</h3>
								<p class="text-gray-300 mb-2">• Mitigation: Conservative projections</p>
								<p class="text-gray-300">• Contingency: Phased rollout</p>
							</div>
						</Step>
					</div>
				</div>
			</div>
		</Layout>
	</Slide>

	<!-- Slide 18: Closing -->
	<Slide>
		<Layout>
			<div class="flex h-full flex-col items-center justify-center gap-12">
				<h1 class="text-[120px] font-bold text-white">🚀 Let's Build the Future</h1>
				<p class="text-[56px] text-gray-300">of Disc Golf</p>
				
				<div class="mt-12 space-y-8 text-center">
					<div class="text-[40px]">
						<p class="font-bold text-white">[Your Name]</p>
						<p class="text-gray-400">Founder & CEO</p>
					</div>
					
					<div class="text-[36px] text-gray-300 space-y-3">
						<p>📧 [email@fligolf.com]</p>
						<p>🌐 [www.fligolf.com]</p>
					</div>
					
					<div class="text-[32px] text-gray-400 space-x-6">
						<span>🐦 @FLIGolf</span>
						<span>📷 @FLIGolf</span>
						<span>💼 FLI Golf</span>
					</div>
				</div>
				
				<p class="mt-12 text-[24px] text-gray-500">Confidential - For Investment Purposes Only</p>
			</div>
		</Layout>
	</Slide>
</Presentation>

<style>
	:global(body) {
		background: #0a0a0a;
	}
</style>
