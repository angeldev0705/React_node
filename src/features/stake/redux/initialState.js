import { yCurveFiRewardsABI, balancerRewardsABI, governanceABI, pool4Abi } from "../../configure";

const pools = [
	{
		name: 'yearn.finance',
		token: 'curve.fi',
		tokenDecimals: 18,
		tokenAddress: '0xdF5e0e81Dff6FAF3A7e52BA697820c5e32D806A8',
		earnedToken: 'YFII',
		earnedTokenDecimals: 18,
		earnedTokenAddress: '0xa1d0E215a23d7030842FC67cE582a6aFa3CCaB83',
		earnContractAddress: '0xb81D3cB2708530ea990a287142b82D058725C092',
		earnContractAbi: yCurveFiRewardsABI,
	},
	{
		name: 'Balancer Pool',
		token: 'BPT',
		tokenDecimals: 18,
		tokenAddress: '0x16cAC1403377978644e78769Daa49d8f6B6CF565',
		earnedToken: 'YFII',
		earnedTokenDecimals: 18,
		earnedTokenAddress: '0xa1d0E215a23d7030842FC67cE582a6aFa3CCaB83',
		earnContractAddress: '0xAFfcD3D45cEF58B1DfA773463824c6F6bB0Dc13a',
		earnContractAbi: balancerRewardsABI,
	},
	{
		name: 'Governance',
		token: 'YFII',
		tokenDecimals: 18,
		tokenAddress: '0xa1d0E215a23d7030842FC67cE582a6aFa3CCaB83',
		earnedToken: 'yCrv',
		earnedTokenDecimals: 18,
		earnedTokenAddress: '0xa1d0E215a23d7030842FC67cE582a6aFa3CCaB83',
		earnContractAddress: '0xf1750B770485A5d0589A6ba1270D9FC354884D45',
		earnContractAbi: governanceABI,
	},
	{
		name: 'pool',
		token: process.env.NEXT_PUBLIC_INPUT_TOKEN2,
		tokenDecimals: 18,
		tokenAddress: process.env.NEXT_PUBLIC_INPUT_TOKEN_ADDR2,
		earnedToken: process.env.NEXT_PUBLIC_REWARD_TOKEN2,
		earnedTokenDecimals: 18,
		earnedTokenAddress: process.env.NEXT_PUBLIC_REWARD_TOKEN_ADDR2,
		earnContractAddress: process.env.NEXT_PUBLIC_POOL_CONTRACT2,
		earnContractAbi: pool4Abi
	},
	{
		name: 'pool',
		token: process.env.NEXT_PUBLIC_INPUT_TOKEN,
		tokenDecimals: 18,
		tokenAddress: process.env.NEXT_PUBLIC_INPUT_TOKEN_ADDR,
		earnedToken: process.env.NEXT_PUBLIC_REWARD_TOKEN,
		earnedTokenDecimals: 18,
		earnedTokenAddress: process.env.NEXT_PUBLIC_REWARD_TOKEN_ADDR,
		earnContractAddress: process.env.NEXT_PUBLIC_POOL_CONTRACT,
		earnContractAbi: pool4Abi
	},
];

const poolsInfo = [{
	name: "yearn.finance",
	staked: 0,
	tvl: 0,
	apy: 0,
},{
	name: "Balancer Pool",
	staked: 0,
	tvl: 0,
	apy: 0,
},{
	name: "Governance",
	staked: 0,
	tvl: 0,
	apy: 0,
},{
	name: process.env.NEXT_PUBLIC_POOL_NAME2,
	staked: 0,
	tvl: 0,
	apy: 0,
},{
	name: process.env.NEXT_PUBLIC_POOL_NAME,
	staked: 0,
	tvl: 0,
	apy: 0,
}]
const allowance = [0,0,0,0,0];
const balance = [0,0,0,0,0];
const currentlyStaked = [0,0,0,0,0];
const rewardsAvailable = [0,0,0,0,0];
const halfTime = [0,0,0,0,0];
const canWithdrawTime = [0,0,0,0,0];


const initialState = {
	pools,
	allowance,
	currentlyStaked,
	rewardsAvailable,
	halfTime,
	canWithdrawTime,
	balance,
	poolsInfo,
	fetchPoolsInfoPending: false,
	checkApprovalPending: [false,false,false,false,false],
	fetchBalancePending: [false,false,false,false,false],
	fetchCurrentlyStakedPending: [false,false,false,false,false],
	fetchRewardsAvailablePending: [false,false,false,false,false],
	fetchHalfTimePending: [false,false,false,false,false],
	fetchCanWithdrawTimePending: [false,false,false,false,false],
	fetchApprovalPending: [false,false,false,false,false],
	fetchStakePending: [false,false,false,false,false],
	fetchWithdrawPending: [false,false,false,false,false],
	fetchClaimPending: [false,false,false,false,false],
	fetchExitPending: [false,false,false,false,false]
};

export default initialState;