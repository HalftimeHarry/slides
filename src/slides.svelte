<script lang="ts">
	import { Presentation, Slide, Step, FitText, BarChart, LineChart } from '@components'
	import Card from '$lib/components/ui/card.svelte'
	import Layout from './layout.svelte'
	import { 
		TrendingUp, 
		Users, 
		DollarSign, 
		Target, 
		Zap,
		Trophy,
		BarChart3,
		LineChart as LineChartIcon,
		Shield,
		Rocket,
		AlertCircle,
		CheckCircle2,
		Circle
	} from 'lucide-svelte'

	// Data for charts
	const revenueData = [
		{ label: 'Y1', value: 2.5, color: '#3b82f6' },
		{ label: 'Y2', value: 6.8, color: '#10b981' },
		{ label: 'Y3', value: 12.5, color: '#8b5cf6' },
		{ label: 'Y4', value: 18.2, color: '#f59e0b' },
		{ label: 'Y5', value: 24.0, color: '#ef4444' }
	]

	const growthData = [
		{ label: '2019', value: 2.5 },
		{ label: '2020', value: 3.2 },
		{ label: '2021', value: 3.8 },
		{ label: '2022', value: 4.1 },
		{ label: '2023', value: 4.5 }
	]
</script>

<Presentation>
	<!-- Slide 1a: Title - Initial state with logos spawning from center -->
	<Slide animate>
		<Layout>
			<div class="relative flex h-full flex-col items-center justify-center gap-8">
				<!-- Main logo stays centered -->
				<img 
					src="/images/brand/fliGolf_rwb.png" 
					alt="FLI Golf Logo" 
					class="w-[300px] h-auto object-contain mb-8 relative z-10"
					data-id="main-logo"
				/>
				
				<!-- Team logos starting at center (10px up from main logo) -->
				<div class="absolute left-1/2 top-[calc(35%-20px)] -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-3" data-id="logo-1">
					<img src="/images/teams/mini-logos/ace_makers_mini.jpg" alt="Ace Makers" class="w-16 h-16 object-contain" />
				</div>
				<div class="absolute left-1/2 top-[calc(35%-20px)] -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-3" data-id="logo-2">
					<img src="/images/teams/mini-logos/birdie_storm_mini.jpg" alt="Birdie Storm" class="w-16 h-16 object-contain" />
				</div>
				<div class="absolute left-1/2 top-[calc(35%-20px)] -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-3" data-id="logo-3">
					<img src="/images/teams/mini-logos/chain_breakers_mini.jpg" alt="Chain Breakers" class="w-16 h-16 object-contain" />
				</div>
				<div class="absolute left-1/2 top-[calc(35%-20px)] -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-3" data-id="logo-4">
					<img src="/images/teams/mini-logos/chain_seekers_mini.jpg" alt="Chain Seekers" class="w-16 h-16 object-contain" />
				</div>
				<div class="absolute left-1/2 top-[calc(35%-20px)] -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-3" data-id="logo-5">
					<img src="/images/teams/mini-logos/disc_dynasty_mini.jpg" alt="Disc Dynasty" class="w-16 h-16 object-contain" />
				</div>
				<div class="absolute left-1/2 top-[calc(35%-20px)] -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-3" data-id="logo-6">
					<img src="/images/teams/mini-logos/disk_jesters_mini.png" alt="Disk Jesters" class="w-16 h-16 object-contain" />
				</div>
				<div class="absolute left-1/2 top-[calc(35%-20px)] -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-3" data-id="logo-7">
					<img src="/images/teams/mini-logos/fair_way_bombers_mini.png" alt="Fairway Bombers" class="w-16 h-16 object-contain" />
				</div>
				<div class="absolute left-1/2 top-[calc(35%-20px)] -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-3" data-id="logo-8">
					<img src="/images/teams/mini-logos/flight_squad_mini.png" alt="Flight Squad" class="w-16 h-16 object-contain" />
				</div>
				<div class="absolute left-1/2 top-[calc(35%-20px)] -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-3" data-id="logo-9">
					<img src="/images/teams/mini-logos/glide_masters_miini.png" alt="Glide Masters" class="w-16 h-16 object-contain" />
				</div>
				<div class="absolute left-1/2 top-[calc(35%-20px)] -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-3" data-id="logo-10">
					<img src="/images/teams/mini-logos/huk_a_mania_mini.png" alt="Huk-A-Mania" class="w-16 h-16 object-contain" />
				</div>
				<div class="absolute left-1/2 top-[calc(35%-20px)] -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-3" data-id="logo-11">
					<img src="/images/teams/mini-logos/hyzer_heroes_mini.png" alt="Hyzer Heroes" class="w-16 h-16 object-contain" />
				</div>
				<div class="absolute left-1/2 top-[calc(35%-20px)] -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-3" data-id="logo-12">
					<img src="/images/teams/mini-logos/midas_touch_mini.png" alt="Midas Touch" class="w-16 h-16 object-contain" />
				</div>
				
				<!-- Title content -->
				<h1 class="text-[120px] font-bold text-white relative z-10">FLI GOLF</h1>
				<p class="text-[48px] text-gray-300 relative z-10">The Future of Professional Disc Golf</p>
				<div class="mt-16 text-[32px] text-gray-400 relative z-10">
					<p>Investor Presentation</p>
					<p class="mt-4">{new Date().getFullYear()}</p>
				</div>
			</div>
		</Layout>
	</Slide>

	<!-- Slide 1b: Title - Logos animate to left side in 4-3-3-2 pattern -->
	<Slide animate>
		<Layout>
			<div class="relative flex h-full flex-col items-center justify-center gap-8">
				<!-- Main logo stays centered -->
				<img 
					src="/images/brand/fliGolf_rwb.png" 
					alt="FLI Golf Logo" 
					class="w-[300px] h-auto object-contain mb-8 relative z-10"
					data-id="main-logo"
				/>
				
				<!-- Team logos spread out on LEFT side - adjusted alignment -->
				<!-- LEFT 4 LOGOS - aligned vertically -->
				<div class="absolute left-[3rem] top-[8%] bg-white rounded-xl p-4 shadow-xl rotate-[1080deg]" data-id="logo-1">
					<img src="/images/teams/mini-logos/ace_makers_mini.jpg" alt="Ace Makers" class="w-20 h-20 object-contain" />
				</div>
				<div class="absolute left-[3rem] top-[28%] bg-white rounded-xl p-4 shadow-xl rotate-[1080deg]" data-id="logo-2">
					<img src="/images/teams/mini-logos/birdie_storm_mini.jpg" alt="Birdie Storm" class="w-20 h-20 object-contain" />
				</div>
				<div class="absolute left-[3rem] top-[calc(48%+80px)] bg-white rounded-xl p-4 shadow-xl rotate-[1080deg]" data-id="logo-3">
					<img src="/images/teams/mini-logos/chain_breakers_mini.jpg" alt="Chain Breakers" class="w-20 h-20 object-contain" />
				</div>
				<div class="absolute left-[3rem] top-[calc(68%+80px)] bg-white rounded-xl p-4 shadow-xl rotate-[1080deg]" data-id="logo-4">
					<img src="/images/teams/mini-logos/chain_seekers_mini.jpg" alt="Chain Seekers" class="w-20 h-20 object-contain" />
				</div>
				
				<!-- MIDDLE 2 LOGOS - spaced much more -->
				<div class="absolute left-[14rem] top-[28%] bg-white rounded-xl p-4 shadow-xl rotate-[1080deg]" data-id="logo-6">
					<img src="/images/teams/mini-logos/disk_jesters_mini.png" alt="Disk Jesters" class="w-20 h-20 object-contain" />
				</div>
				<div class="absolute left-[21rem] top-[calc(48%+80px)] bg-white rounded-xl p-4 shadow-xl rotate-[1080deg]" data-id="logo-9">
					<img src="/images/teams/mini-logos/glide_masters_miini.png" alt="Glide Masters" class="w-20 h-20 object-contain" />
				</div>
				
				<!-- TOP ROW - spread toward center -->
				<div class="absolute left-[16rem] top-[15%] bg-white rounded-xl p-4 shadow-xl rotate-[1080deg]" data-id="logo-5">
					<img src="/images/teams/mini-logos/disc_dynasty_mini.jpg" alt="Disc Dynasty" class="w-20 h-20 object-contain" />
				</div>
				<div class="absolute left-[25rem] top-[15%] bg-white rounded-xl p-4 shadow-xl rotate-[1080deg]" data-id="logo-8">
					<img src="/images/teams/mini-logos/flight_squad_mini.png" alt="Flight Squad" class="w-20 h-20 object-contain" />
				</div>
				<div class="absolute left-[calc(32rem+20px)] top-[8%] bg-white rounded-xl p-4 shadow-xl rotate-[1080deg]" data-id="logo-11">
					<img src="/images/teams/mini-logos/hyzer_heroes_mini.png" alt="Hyzer Heroes" class="w-20 h-20 object-contain" />
				</div>
				
				<!-- BOTTOM ROW - spread out more -->
				<div class="absolute left-[14rem] top-[calc(61%+80px)] bg-white rounded-xl p-4 shadow-xl rotate-[1080deg]" data-id="logo-7">
					<img src="/images/teams/mini-logos/fair_way_bombers_mini.png" alt="Fairway Bombers" class="w-20 h-20 object-contain" />
				</div>
				<div class="absolute left-[23rem] top-[calc(61%+80px)] bg-white rounded-xl p-4 shadow-xl rotate-[1080deg]" data-id="logo-10">
					<img src="/images/teams/mini-logos/huk_a_mania_mini.png" alt="Huk-A-Mania" class="w-20 h-20 object-contain" />
				</div>
				<div class="absolute left-[14rem] top-[calc(61%+80px)] bg-white rounded-xl p-4 shadow-xl rotate-[1080deg]" data-id="logo-7">
					<img src="/images/teams/mini-logos/fair_way_bombers_mini.png" alt="Fairway Bombers" class="w-20 h-20 object-contain" />
				</div>
				<div class="absolute left-[23rem] top-[calc(61%+80px)] bg-white rounded-xl p-4 shadow-xl rotate-[1080deg]" data-id="logo-10">
					<img src="/images/teams/mini-logos/huk_a_mania_mini.png" alt="Huk-A-Mania" class="w-20 h-20 object-contain" />
				</div>
				<div class="absolute left-[31rem] top-[calc(68%+80px)] bg-white rounded-xl p-4 shadow-xl rotate-[1080deg]" data-id="logo-12">
					<img src="/images/teams/mini-logos/midas_touch_mini.png" alt="Midas Touch" class="w-20 h-20 object-contain" />
				</div>
				
				<!-- Title content -->
				<h1 class="text-[120px] font-bold text-white relative z-10">FLI GOLF</h1>
				<p class="text-[48px] text-gray-300 relative z-10">The Future of Professional Disc Golf</p>
				<div class="mt-16 text-[32px] text-gray-400 relative z-10">
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
				<h2 class="text-[80px] font-bold text-white flex items-center gap-4">
					<AlertCircle size={80} class="text-red-400" />
					Challenges
				</h2>
				
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
							<Card class="bg-blue-950/60 border-blue-500/50 p-6 backdrop-blur">
								<h3 class="text-[36px] font-bold text-blue-400 mb-3 flex items-center gap-3">
									<Zap size={36} class="text-blue-400" />
									Arena Events
								</h3>
								<ul class="space-y-2 text-[28px] text-gray-300">
									<li class="flex items-center gap-2">
										<CheckCircle2 size={24} class="text-blue-400" />
										Purpose-built stadium courses
									</li>
									<li class="flex items-center gap-2">
										<CheckCircle2 size={24} class="text-blue-400" />
										5,000+ seat capacity
									</li>
									<li class="flex items-center gap-2">
										<CheckCircle2 size={24} class="text-blue-400" />
										Premium viewing angles
									</li>
									<li class="flex items-center gap-2">
										<CheckCircle2 size={24} class="text-blue-400" />
										Weather-protected venues
									</li>
								</ul>
							</Card>
						</Step>
						
						<Step>
							<Card class="bg-purple-950/60 border-purple-500/50 p-6 backdrop-blur">
								<h3 class="text-[36px] font-bold text-purple-400 mb-3 flex items-center gap-3">
									<Trophy size={36} class="text-purple-400" />
									Broadcast Production
								</h3>
								<ul class="space-y-2 text-[28px] text-gray-300">
									<li class="flex items-center gap-2">
										<CheckCircle2 size={24} class="text-purple-400" />
										Multi-camera coverage
									</li>
									<li class="flex items-center gap-2">
										<CheckCircle2 size={24} class="text-purple-400" />
										Real-time stats overlay
									</li>
									<li class="flex items-center gap-2">
										<CheckCircle2 size={24} class="text-purple-400" />
										Drone footage
									</li>
									<li class="flex items-center gap-2">
										<CheckCircle2 size={24} class="text-purple-400" />
										Professional commentary
									</li>
								</ul>
							</Card>
						</Step>
					</div>
					
					<div class="space-y-4">
						<Step>
							<Card class="bg-green-950/60 border-green-500/50 p-6 backdrop-blur">
								<h3 class="text-[36px] font-bold text-green-400 mb-3 flex items-center gap-3">
									<Users size={36} class="text-green-400" />
									Team Structure
								</h3>
								<ul class="space-y-2 text-[28px] text-gray-300">
									<li class="flex items-center gap-2">
										<CheckCircle2 size={24} class="text-green-400" />
										12 franchise teams
									</li>
									<li class="flex items-center gap-2">
										<CheckCircle2 size={24} class="text-green-400" />
										Draft system for players
									</li>
									<li class="flex items-center gap-2">
										<CheckCircle2 size={24} class="text-green-400" />
										Team branding & merchandise
									</li>
									<li class="flex items-center gap-2">
										<CheckCircle2 size={24} class="text-green-400" />
										Home/away format
									</li>
								</ul>
							</Card>
						</Step>
						
						<Step>
							<Card class="bg-orange-950/60 border-orange-500/50 p-6 backdrop-blur">
								<h3 class="text-[36px] font-bold text-orange-400 mb-3 flex items-center gap-3">
									<Rocket size={36} class="text-orange-400" />
									Fan Engagement
								</h3>
								<ul class="space-y-2 text-[28px] text-gray-300">
									<li class="flex items-center gap-2">
										<CheckCircle2 size={24} class="text-orange-400" />
										Fantasy league platform
									</li>
									<li class="flex items-center gap-2">
										<CheckCircle2 size={24} class="text-orange-400" />
										Live betting integration
									</li>
									<li class="flex items-center gap-2">
										<CheckCircle2 size={24} class="text-orange-400" />
										Mobile app experience
									</li>
									<li class="flex items-center gap-2">
										<CheckCircle2 size={24} class="text-orange-400" />
										Social media activation
									</li>
								</ul>
							</Card>
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
				<h2 class="text-[80px] font-bold text-white flex items-center gap-4">
					<Target size={80} class="text-green-400" />
					Market Opportunity
				</h2>
				
				<div class="grid grid-cols-2 gap-8">
					<Step>
						<div class="rounded-lg bg-blue-900/40 p-8 border-2 border-blue-500">
							<h3 class="text-[40px] font-bold text-blue-400 mb-6 flex items-center gap-3">
								<BarChart3 size={40} class="text-blue-400" />
								Market Size
							</h3>
							<div class="space-y-4 text-[32px] text-gray-300">
								<p class="flex items-center gap-3">
									<Users size={32} class="text-blue-400" />
									<span><span class="font-bold text-white">4.5M</span> active disc golfers in US</span>
								</p>
								<p class="flex items-center gap-3">
									<DollarSign size={32} class="text-green-400" />
									<span><span class="font-bold text-white">$50M+</span> annual equipment sales</span>
								</p>
								<p class="flex items-center gap-3">
									<TrendingUp size={32} class="text-purple-400" />
									<span><span class="font-bold text-white">Growing 15%</span> year-over-year</span>
								</p>
								<p class="flex items-center gap-3">
									<Target size={32} class="text-orange-400" />
									<span><span class="font-bold text-white">35</span> average age demographic</span>
								</p>
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
						<div class="rounded-lg bg-green-900/40 p-6 border-2 border-green-500">
							<h3 class="text-[36px] font-bold text-green-400 mb-4 flex items-center gap-3">
								<LineChartIcon size={36} class="text-green-400" />
								Growth Trend (2019-2023)
							</h3>
							<LineChart data={growthData} width={800} height={400} color="#10b981" />
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
				<h2 class="text-[80px] font-bold text-white flex items-center gap-4">
					<BarChart3 size={80} class="text-blue-400" />
					Financial Projections
				</h2>
				
				<div class="grid grid-cols-2 gap-8">
					<Step>
						<div class="rounded-lg bg-gray-800/60 p-8 border-2 border-gray-600">
							<h3 class="text-[40px] font-bold text-white mb-6 flex items-center gap-3">
								<DollarSign size={40} class="text-green-400" />
								3-Year Forecast
							</h3>
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
								<p class="flex items-center gap-2">
									<CheckCircle2 size={20} class="text-green-400" />
									Break-even: Month 18
								</p>
								<p class="flex items-center gap-2">
									<CheckCircle2 size={20} class="text-green-400" />
									Gross margin: 45% by Y3
								</p>
								<p class="flex items-center gap-2">
									<CheckCircle2 size={20} class="text-green-400" />
									CAC payback: 8 months
								</p>
							</div>
						</div>
					</Step>
					
					<Step>
						<div class="rounded-lg bg-gray-800/60 p-6 border-2 border-purple-500">
							<h3 class="text-[36px] font-bold text-purple-400 mb-4 flex items-center gap-3">
								<TrendingUp size={36} class="text-purple-400" />
								Revenue Growth (5 Years)
							</h3>
							<BarChart data={revenueData} width={800} height={350} />
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
