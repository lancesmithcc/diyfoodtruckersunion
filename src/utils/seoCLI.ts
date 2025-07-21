/**
 * SEO Command Line Interface
 * Development utilities for SEO testing and validation
 */

import { SEOTesting } from './seoTesting';
import { SEODevTools } from './seoDevTools';
import { SEOConfigLoader } from './seoConfigLoader';
import { SEOSetup } from './seoSetup';
import { SEO_DEV_CONFIG } from '../config/seo-dev';

/**
 * SEO CLI Commands
 */
export class SEOCLI {
  /**
   * Run all SEO tests
   */
  public static async runTests(): Promise<void> {
    if (!SEO_DEV_CONFIG.enabled) {
      console.log('SEO CLI is only available in development mode');
      return;
    }

    console.log('🧪 Running SEO Test Suite...\n');
    
    const results = await SEOTesting.runTestSuite();
    
    console.log('📊 Test Results:');
    console.log(`✅ Passed: ${results.passed}`);
    console.log(`❌ Failed: ${results.failed}`);
    console.log(`📈 Success Rate: ${Math.round((results.passed / (results.passed + results.failed)) * 100)}%\n`);
    
    results.results.forEach(result => {
      const icon = result.passed ? '✅' : '❌';
      console.log(`${icon} ${result.test}: ${result.message}`);
    });

    if (results.failed > 0) {
      console.log('\n🔧 Run `SEOCLI.fix()` to get suggestions for fixing issues');
    }
  }

  /**
   * Generate comprehensive SEO report
   */
  public static async generateReport(): Promise<void> {
    if (!SEO_DEV_CONFIG.enabled) {
      console.log('SEO CLI is only available in development mode');
      return;
    }

    console.log('📋 Generating SEO Report...\n');
    
    try {
      // System status
      const setup = SEOSetup.getInstance();
      console.log('🔧 System Status:');
      console.log(`  - Initialized: ${setup.isReady() ? '✅' : '❌'}`);
      
      // Configuration stats
      const stats = await SEOConfigLoader.getStats();
      console.log('\n📊 Configuration Statistics:');
      console.log(`  - Total Pages: ${stats.totalPages}`);
      console.log(`  - Average Score: ${stats.averageScore.toFixed(1)}`);
      console.log(`  - Issues Found: ${stats.issueCount}`);
      
      // Category breakdown
      console.log('\n📂 Category Distribution:');
      Object.entries(stats.categoryCounts).forEach(([category, count]) => {
        console.log(`  - ${category}: ${count} pages`);
      });

      // Test scenarios
      console.log('\n🎯 Test Scenarios:');
      const scenarios = SEOTesting.getTestScenarios();
      for (const scenario of scenarios) {
        const validation = await import('./seoValidation').then(mod => 
          mod.validateSEOConfig(scenario.config)
        );
        const icon = validation.score >= scenario.expectedScore ? '✅' : '⚠️';
        console.log(`  ${icon} ${scenario.name}: ${validation.score}/${scenario.expectedScore}`);
      }

      // Performance metrics
      console.log('\n⚡ Performance Metrics:');
      if (typeof window !== 'undefined' && window.performance) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigation) {
          console.log(`  - DOM Content Loaded: ${(navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart).toFixed(2)}ms`);
          console.log(`  - Load Complete: ${(navigation.loadEventEnd - navigation.loadEventStart).toFixed(2)}ms`);
        }
      }

      console.log('\n✅ Report generation complete');
    } catch (error) {
      console.error('❌ Failed to generate report:', error);
    }
  }

  /**
   * Analyze current page
   */
  public static analyzePage(): void {
    if (!SEO_DEV_CONFIG.enabled) {
      console.log('SEO CLI is only available in development mode');
      return;
    }

    console.log('🔍 Analyzing Current Page...\n');
    
    const devTools = SEODevTools.getInstance();
    
    // Run all analyses
    devTools.analyzePageStructure();
    devTools.analyzeMetaTags();
    devTools.analyzeStructuredData();
    devTools.analyzeContentReadability();
    devTools.analyzeInternalLinks();
    
    console.log('\n✅ Page analysis complete');
  }

  /**
   * Validate all configurations
   */
  public static async validateConfigs(): Promise<void> {
    if (!SEO_DEV_CONFIG.enabled) {
      console.log('SEO CLI is only available in development mode');
      return;
    }

    console.log('🔍 Validating All SEO Configurations...\n');
    
    try {
      const validations = await SEOConfigLoader.validateAllConfigs();
      
      const valid = validations.filter(v => v.validation.isValid);
      const invalid = validations.filter(v => !v.validation.isValid);
      
      console.log(`✅ Valid configurations: ${valid.length}`);
      console.log(`❌ Invalid configurations: ${invalid.length}\n`);
      
      if (invalid.length > 0) {
        console.log('🚨 Issues found:');
        invalid.forEach(({ slug, validation }) => {
          console.log(`\n📄 ${slug}:`);
          validation.errors.forEach(error => {
            console.log(`  ❌ ${error}`);
          });
          validation.warnings.forEach(warning => {
            console.log(`  ⚠️ ${warning}`);
          });
        });
      }
      
      console.log('\n✅ Configuration validation complete');
    } catch (error) {
      console.error('❌ Failed to validate configurations:', error);
    }
  }

  /**
   * Get fix suggestions
   */
  public static async fix(): Promise<void> {
    if (!SEO_DEV_CONFIG.enabled) {
      console.log('SEO CLI is only available in development mode');
      return;
    }

    console.log('🔧 SEO Fix Suggestions...\n');
    
    // Run tests to identify issues
    const results = await SEOTesting.runTestSuite();
    const failedTests = results.results.filter(r => !r.passed);
    
    if (failedTests.length === 0) {
      console.log('✅ No issues found! Your SEO setup is working correctly.');
      return;
    }

    console.log('🚨 Issues found and suggested fixes:\n');
    
    failedTests.forEach((test, index) => {
      console.log(`${index + 1}. ${test.test}`);
      console.log(`   Problem: ${test.message}`);
      
      // Provide specific fix suggestions
      switch (test.test) {
        case 'SEO Config Validation':
          console.log('   Fix: Check your SEO configuration for missing or invalid fields');
          console.log('   - Ensure title is 30-60 characters');
          console.log('   - Ensure description is 120-160 characters');
          console.log('   - Add keywords array');
          break;
          
        case 'Page SEO Data Validation':
          console.log('   Fix: Review your page SEO data structure');
          console.log('   - Ensure all required fields are present');
          console.log('   - Check category values match allowed options');
          console.log('   - Validate date formats');
          break;
          
        case 'DOM Structure Test':
          console.log('   Fix: Check your page HTML structure');
          console.log('   - Ensure exactly one H1 tag per page');
          console.log('   - Add meta description tag');
          console.log('   - Include canonical URL');
          break;
          
        case 'Configuration Validation Test':
          console.log('   Fix: Review configuration validation logic');
          console.log('   - Check validation rules are working correctly');
          console.log('   - Ensure error messages are descriptive');
          break;
          
        default:
          console.log('   Fix: Review the specific error message above');
      }
      console.log('');
    });

    console.log('💡 General recommendations:');
    console.log('- Run `SEOCLI.analyzePage()` to analyze current page structure');
    console.log('- Run `SEOCLI.validateConfigs()` to check all configurations');
    console.log('- Use the SEO debug panel (Ctrl+Shift+S) for real-time analysis');
    console.log('- Check the browser console for additional SEO warnings');
  }

  /**
   * Performance benchmark
   */
  public static async benchmark(): Promise<void> {
    if (!SEO_DEV_CONFIG.enabled) {
      console.log('SEO CLI is only available in development mode');
      return;
    }

    console.log('⚡ Running SEO Performance Benchmark...\n');
    
    const benchmarks = [
      {
        name: 'SEO Config Validation',
        operation: () => {
          const config = SEOTesting.createMockSEOConfig();
          return import('./seoValidation').then(mod => mod.validateSEOConfig(config));
        }
      },
      {
        name: 'Page SEO Data Validation',
        operation: () => {
          const data = SEOTesting.createMockPageSEOData();
          return import('./seoValidation').then(mod => mod.validatePageSEOData(data));
        }
      },
      {
        name: 'Configuration Loading',
        operation: () => SEOConfigLoader.getStats()
      },
      {
        name: 'Test Suite Execution',
        operation: () => SEOTesting.runTestSuite()
      }
    ];

    for (const benchmark of benchmarks) {
      const { duration } = await SEOTesting.measureSEOPerformanceAsync(
        benchmark.operation,
        benchmark.name
      );
      
      const performance = duration < 10 ? '🚀 Excellent' : 
                         duration < 50 ? '✅ Good' : 
                         duration < 100 ? '⚠️ Acceptable' : '🐌 Slow';
      
      console.log(`${performance} ${benchmark.name}: ${duration.toFixed(2)}ms`);
    }
    
    console.log('\n✅ Benchmark complete');
  }

  /**
   * Show help information
   */
  public static help(): void {
    console.log('🔍 SEO CLI Help\n');
    console.log('Available commands:');
    console.log('  SEOCLI.runTests()      - Run all SEO tests');
    console.log('  SEOCLI.generateReport() - Generate comprehensive SEO report');
    console.log('  SEOCLI.analyzePage()   - Analyze current page structure');
    console.log('  SEOCLI.validateConfigs() - Validate all SEO configurations');
    console.log('  SEOCLI.fix()           - Get suggestions for fixing issues');
    console.log('  SEOCLI.benchmark()     - Run performance benchmarks');
    console.log('  SEOCLI.help()          - Show this help message');
    console.log('\nKeyboard shortcuts:');
    console.log('  Ctrl+Shift+S - Open SEO debug panel');
    console.log('  Ctrl+Shift+A - Run SEO audit');
    console.log('  Ctrl+Shift+H - Analyze page structure');
    console.log('\nFor more information, visit the SEO documentation.');
  }
}

// Make CLI available globally in development
if (SEO_DEV_CONFIG.enabled && typeof window !== 'undefined') {
  (window as any).SEOCLI = SEOCLI;
  console.log('🔍 SEO CLI loaded. Type SEOCLI.help() for available commands.');
}

export default SEOCLI;